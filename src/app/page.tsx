'use client'
import { useState, useEffect } from "react"

import Image from "next/image"
import Logo from 'public/assets/logo4.png'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LabelDemo } from "@/components/Label"
import { TextInput } from "@/components/Textarea"
import { Footer } from "@/components/Footer"

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("movie");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  
  return (
    <div className="bg-black">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <header className="flex items-center justify-center py-8">
          <Image
          src={Logo}
          width={250}
          height={250}
          alt="Picture of the author"
          priority={true}
          />
        </header>
        <main className="flex-1">
          <section>
            <div className="relative z-0 mx-auto max-w-3x1 pt-12 text-center">
              <div className="absolute -top-4 -z-10 flex w-full justify-center">
                <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]"/>
              </div>
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
                <LabelDemo />
              </div>
              <TextInput />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
