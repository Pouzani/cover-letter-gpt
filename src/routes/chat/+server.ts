import type { RequestHandler } from './$types';
import { OPENAI_KEY, COVER_LETTER_PROMPT } from '$env/static/private';
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, type Message} from 'ai'
import type { ChatCompletionMessage } from 'openai/resources';

const openai = new OpenAI({
    apiKey: OPENAI_KEY
});

export const POST: RequestHandler = async ({ request }) => {
    let { messages } = await request.json();
    const systemMessage = {
        role: "system",
        content: COVER_LETTER_PROMPT
    }
    messages = [systemMessage, ...messages];

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        stream: true,
        messages,
        
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);

};