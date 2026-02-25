import OpenAI from 'openai';
import { GROQ_LLM_API_KEY } from '../../config/index.js';
import { logger, ApiError } from '../../utils/index.js';
import {prisma} from '../../db/index.js';

const openai = new OpenAI({
    apiKey: GROQ_LLM_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
});

const systemPrompt = {
    role: 'system',
    content:
        `you are poductivity assistant,Use tools when needed,No guessing,Reply from tool data if required,Confirm updates,Ask one short question if unclear,Max 50 tokens,Be naturally conversational,Keep responses short,human,If casual conversation,respond normally,If task-related,be precise,never invent tool arguments yourself`
};

const MODEL = 'qwen/qwen3-32b';
// TODO: update and create more tools
const tools = [
    {
        type: 'function',
        function: {
            name: 'fetchData',
            description: 'Fetch latest user details from external API',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    }
];


async function generateAgentResponse(messageObj) {
    try {
        const messageText = messageObj.text?.trim();
        if(!messageText) {
            return 'I only understand text messages.';
        }
        const formattedMessages = [
            {
                role: "system",
                content: `${systemPrompt.content}User's name is: ${messageObj.chat.username || "unknown"}`
            },
            {
                role: "user",
                content: messageText
            }
        ];
        // model decides if it needs to call tool or send message
        const firstResponse = await openai.chat.completions.create({
            model: MODEL,
            temperature: 0.2,
            max_tokens: 50,
            messages: formattedMessages,
            // tools, // TODO: enable when TOOLS are created
            // tool_choice: 'auto', // TODO: enable when TOOLS are created
            reasoning_effort: 'none'
        });

        const message = firstResponse.choices[0].message;

        // if (message.tool_calls) {
        //     logger.info("Tool call:", message.tool_calls);

        //     const toolCall = message.tool_calls[0];

        //     switch(toolCall.function.name) {
        //         // TODO: change tool name, and create more tools
        //         case 'fetchData':
        //             const toolResult = await fetchData();
        //             const secondResponse = await openai.chat.completions.create({
        //                 model: MODEL,
        //                 temperature: 0.4,
        //                 max_tokens: 50,
        //                 messages: [
        //                     ...formattedMessages,
        //                     message,
        //                     {
        //                         role: "tool",
        //                         tool_call_id: toolCall.id,
        //                         content: JSON.stringify(toolResult)
        //                     }
        //                 ],
        //                 // tools, // TODO: enable when TOOLS are created
        //                 tool_choice: 'auto',
        //                 reasoning_effort: 'none'
        //             });
        //             return secondResponse.choices[0].message.content;
        //     }
        // }

        return message.content;
    } catch (error) {
        logger.error('Error generating agent response:', error);
        throw new ApiError(500, 'Error generating agent response');
    }
}

export default generateAgentResponse;
