'use client'
import { useState} from "react"
import Image from "next/image"
import Logo from 'public/assets/logo.png'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LabelDemo } from "@/components/Label"
import { TextInput } from "@/components/Textarea"
import { Footer } from "@/components/Footer"
import CardAnimatedBorderGradient from "@/components/Card"
import { useChat } from 'ai/react'

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("movie");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [textInput, setInputChange] = useState('');

  const { messages, input, handleSubmit, setInput, isLoading } = useChat({
    api: "api/completion",
    onError: () => {
      alert("There was an error with getting the response from the AI");
    }
  })

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleGenresChange = (genres: string[]) => {
    setSelectedGenres(genres);
  };

  const handleTextChange = (value: string) => {
    setInputChange(value);
  };

  let formInputs = `Give me a list of 5 ${selectedOption} recommendations ${ selectedGenres ? `that fit all of the following categories: ${selectedGenres}` : ''}. 
  ${textInput ? `Make sure it fits the following description as well: ${textInput}.` : ''} 
  ${selectedGenres || textInput ? `If you do not have 5 recommendations that fit these criteria perfectly, do your best to suggest other ${selectedOption}'s that I might like.` : ''
  } Please return this response as a numbered list with the ${selectedOption}'s title, followed by a colon, and then a brief description of the ${selectedOption}. There should be a line of whitespace between each item in the list. Also don't add any other text to the response other than the list of 5 ${selectedOption}`

  const submitForm = () => {
    if(isLoading){
      return
    }
    setInput(formInputs);
  }

  return (
    <div className="bg-black">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <header className="flex items-center justify-center py-8">
          <Image
          src={Logo}
          width={250}
          height={250}
          sizes="250px"
          alt="Logo"
          priority={true}
          />
        </header>
        <main className="flex-1">
          <section>
            <div className="relative z-0 mx-auto max-w-3x1 pt-12 text-center">
                <div className="absolute -top-4 -z-10 flex w-full justify-center">
                  <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]"/>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <h1 className="mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-5xl">Generate show or movie recommendations with Open AI</h1>
                    <p className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">What kind of cinema are you searching for?</p>
                    <div className="flex justify-center mt-10 mb-10">
                      <Select onValueChange={handleOptionChange} defaultValue={'movie'}>
                        <SelectTrigger className="w-[300px] text-white">
                          <SelectValue placeholder="Movie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="movie">Movie</SelectItem>
                          <SelectItem value="tv show">Tv Show</SelectItem>
                          <SelectItem value="tv show or movie">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <p className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">Select all categories that you want the show or movie to include.</p>
                  <div className="flex justify-center mt-10 mb-10">
                    <LabelDemo onGenresChange={handleGenresChange} />
                  </div>
                  <TextInput value={textInput} onChange={handleTextChange} />
                  <button aria-label="Create My List" type="submit" onClick={submitForm} className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    Create My List
                  </button>
                </form>
                <CardAnimatedBorderGradient messages={messages} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}