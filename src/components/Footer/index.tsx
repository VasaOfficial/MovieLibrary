import { AiFillGithub } from 'react-icons/ai'

export function Footer() {
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between mt-10 border-t border-gray-600 text-white">
      <div className="flex items-center flex-none">
        Powered by <span className="mx-1 font-bold">OpenAI</span>
      </div>
        <div className='p-7'>
          <a href="https://github.com/VasaOfficial/MovieLibrary" className="my-1 flex items-center justify-center w-10 h-10 rounded-full bg-white">
            <AiFillGithub size={25} className="text-black" />
          </a>
      </div>
    </div>
  );
}