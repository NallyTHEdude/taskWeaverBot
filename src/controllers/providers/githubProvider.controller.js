// WORKS WITH WEBHOOKS
import crypto from "crypto";
import { githubProviderService } from "../../services/providers/githubProvider.service.js";
import { ApiError } from "../../utils/index.js";
import { prisma } from "../../db/index.js";
import { IntegrationProvidersEnum } from "../../utils/constants.js";
import {GITHUB_WEBHOOK_SECRET} from "../../config/index.js";

function verifyGithubSignature(signature, rawBody) {
  const secret = GITHUB_WEBHOOK_SECRET;

  if (!signature || !secret) return false;

  const hmac = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  const expected = `sha256=${hmac}`;

  const sigBuffer = Buffer.from(signature);
  const expBuffer = Buffer.from(expected);

  if (sigBuffer.length !== expBuffer.length) return false;
  return crypto.timingSafeEqual(sigBuffer, expBuffer);
}

const githubWebhookHandler = async (req, res) => {
  const signature = req.headers["x-hub-signature-256"];
  const eventType = req.headers["x-github-event"];
  const rawBody = req.body;

  if (!verifyGithubSignature(signature, rawBody)) {
    throw new ApiError(401, "Invalid GitHub signature");
  }

  const payload = JSON.parse(rawBody.toString());

  // 🔍 Debug log
  console.log("GitHub Event Type:", eventType);
  console.log("GitHub Repo:", payload.repository?.full_name);
  console.log("GitHub Payload:", JSON.stringify(payload, null, 2));

  const githubAccountId =
    payload.repository?.owner?.id || payload.sender?.id;

  if (!githubAccountId) return res.sendStatus(200);

  const integration = await prisma.integration.findUnique({
    where: {
      provider_providerAccountId: {
        provider: IntegrationProvidersEnum.GITHUB,
        providerAccountId: String(githubAccountId)
      }
    }
  });

  if (!integration) return res.sendStatus(200);

  await githubProviderService.handleEvent(
    eventType,
    payload,
    integration.userId
  );

  res.sendStatus(200);
};

export {githubWebhookHandler};