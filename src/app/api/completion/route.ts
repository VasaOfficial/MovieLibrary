import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = 'edge'

export async function POST(request: Request) {
  const { prompt  } = await request.json()

  console.log('post request received')
  console.log(prompt )

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt }`,
    temperature: 0.7,
		stream: true,
		max_tokens: 2048,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
		n: 1,
  });

  console.log(response)

  const stream = OpenAIStream(response);

  console.log(stream)

  return new StreamingTextResponse(stream);
}