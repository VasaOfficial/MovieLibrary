import React, { useState, useEffect } from 'react';
import { Message } from 'ai/react';

interface Recommendation {
  title: string;
  description: string;
}

const CardAnimatedBorderGradient = ({ messages }: { messages: Message[] }) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    // Filter the messages to get only the assistant responses
    const assistantResponses = messages.filter((message) => message.role === 'assistant');

    // Extract the last assistant response
    const lastAssistantResponse = assistantResponses.length > 0 ? assistantResponses[assistantResponses.length - 1] : null;

    // Extract the messageContent from the last assistant response
    const messageContent = lastAssistantResponse?.content ?? null;

    // Process the messageContent and update the recommendations
    const newRecommendations = messageContent
      ? messageContent.split('\n').map((line) => line.replace(/^\d+\.\s*/, ''))
      : [];

    const movies: Recommendation[] = newRecommendations.reduce((acc: Recommendation[], curr: string, index: number) => {
      if (index % 2 === 0) {
        const title = curr;
        const description = newRecommendations[index + 1] ?? '';
        acc.push({ title, description });
      }
      return acc;
    }, []);

    // Update the recommendations state with the new recommendations
    setRecommendations(movies);
  }, [messages]);

  return (
    <div>
      {recommendations.map((movie: Recommendation, index: number) => (
        <div key={index} className='relative h-48 w-full overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl mt-10'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <div className='flex flex-col h-full w-full justify-center rounded-xl bg-slate-950 px-3 py-1 text-white backdrop-blur-3xl'>
            <h2 className="font-bold text-white">{movie.title}</h2>
            <p className="text-white">{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAnimatedBorderGradient;