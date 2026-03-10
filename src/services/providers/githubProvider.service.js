import { prisma } from '../../db/index.js';
import {
    GithubEventTypesEnum,
    IntegrationProvidersEnum,
} from '../../utils/constants.js';
import axios from 'axios';
import { logger } from '../../utils/index.js';
import { BASE_API_URL } from '../../config/index.js';

const GITHUB = IntegrationProvidersEnum.GITHUB;

const PUSH = GithubEventTypesEnum.PUSH;
const ISSUES = GithubEventTypesEnum.ISSUES;
const PULL_REQUEST = GithubEventTypesEnum.PULL_REQUEST;

// GITHUB USES WEBHOOKS , SO WE NEED TO SETUP WEBHOOKS FOR EACH REPO THE USER WANTS TO INTEGRATE WITH
async function getUserRepositories(accessToken) {
    const response = await axios.get(
        'https://api.github.com/user/repos?per_page=100',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/vnd.github+json',
            },
        },
    );
    return response.data;
}
async function createWebhookForRepo(accessToken, owner, repo) {
    await axios.post(
        `https://api.github.com/repos/${owner}/${repo}/hooks`,
        {
            name: 'web',
            active: true,
            events: ['push', 'issues', 'pull_request'],
            config: {
                url: `${BASE_API_URL}/api/v1/provider/github/webhook`,
                content_type: 'json',
                secret: process.env.GITHUB_WEBHOOK_SECRET,
            },
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/vnd.github+json',
            },
        },
    );
}

const githubProviderService = {
    async handleEvent(eventType, payload, userId) {
        if (!userId) return;

        switch (eventType) {
            case PUSH:
                return this.handlePush(payload, userId);

            case ISSUES:
                return this.handleIssue(payload, userId);

            case PULL_REQUEST:
                return this.handlePullRequest(payload, userId);

            default:
                return;
        }
    },

    async handlePush(payload, userId) {
        const commitSha = payload.head_commit?.id;
        if (!commitSha) return;

        await prisma.event.upsert({
            where: {
                provider_externalId: {
                    provider: GITHUB,
                    externalId: commitSha,
                },
            },
            update: {},
            create: {
                userId,
                provider: GITHUB,
                eventType: PUSH,
                externalId: commitSha,
                occurredAt: new Date(payload.head_commit.timestamp),
                metadata: {
                    repo: payload.repository?.full_name,
                    branch: payload.ref,
                    message: payload.head_commit?.message,
                    author: payload.head_commit?.author?.name,
                },
            },
        });
    },

    async handleIssue(payload, userId) {
        const issueId = payload.issue?.id;
        if (!issueId) return;

        await prisma.event.upsert({
            where: {
                provider_externalId: {
                    provider: GITHUB,
                    externalId: String(issueId),
                },
            },
            update: {},
            create: {
                userId,
                provider: GITHUB,
                eventType: ISSUES,
                externalId: String(issueId),
                occurredAt: new Date(payload.issue.created_at),
                metadata: {
                    repo: payload.repository?.full_name,
                    title: payload.issue?.title,
                    state: payload.issue?.state,
                    author: payload.issue?.user?.login,
                },
            },
        });
    },

    async handlePullRequest(payload, userId) {
        const prId = payload.pull_request?.id;
        if (!prId) return;

        await prisma.event.upsert({
            where: {
                provider_externalId: {
                    provider: GITHUB,
                    externalId: String(prId),
                },
            },
            update: {},
            create: {
                userId,
                provider: GITHUB,
                eventType: PULL_REQUEST,
                externalId: String(prId),
                occurredAt: new Date(payload.pull_request.created_at),
                metadata: {
                    repo: payload.repository?.full_name,
                    title: payload.pull_request?.title,
                    state: payload.pull_request?.state,
                    author: payload.pull_request?.user?.login,
                },
            },
        });
    },
};

async function setupGithubWebhooks(integration) {
    if (!integration || !integration.accessToken) return;

    const accessToken = integration.accessToken;
    const repos = await getUserRepositories(accessToken);

    console.log('Repo:', repos.full_name);

    for (const repo of repos) {
        console.debug(`repo: ${repo.full_name}`);
        console.debug(`isAdmin: ${repo.permissions?.admin}`);
        if (!repo.permissions?.admin) continue;
        try {
            await createWebhookForRepo(
                accessToken,
                repo.owner.login,
                repo.name,
            );
        } catch (error) {
            // 422=>already exists
            if (error.response?.status !== 422) {
                console.error(
                    'Webhook creation failed:',
                    error.response?.data || error.message,
                );
            }
        }
    }
}

export { githubProviderService, setupGithubWebhooks };
