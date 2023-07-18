interface Recommendation {
  title: string;
  description: string;
}

interface CardAnimatedBorderGradientProps {
  recommendations: string[];
}

const CardAnimatedBorderGradient: React.FC<CardAnimatedBorderGradientProps> = ({ recommendations }: CardAnimatedBorderGradientProps) => {
  const movies: Recommendation[] = recommendations.reduce((acc: Recommendation[], curr: string, index: number) => {
    if (index % 2 === 0) {
      const title = curr;
      const description = recommendations[index + 1] ?? '';
      acc.push({ title, description });
    }
    return acc;
  }, []);

  return (
    <div>
      {movies.map((movie: Recommendation, index: number) => (
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
