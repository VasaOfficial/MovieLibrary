export function Footer() {
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between mt-10 border-t border-gray-600 text-white">
      <div className="flex items-center flex-none">
        Powered by <span className="mx-1 font-bold">OpenAI</span>
      </div>
        <div className='p-10'>
          <a href="https://github.com/VasaOfficial/MovieLibrary" target="_blank">
            <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                Github
              </span>
            </button>
          </a>
      </div>
    </div>
  );
}