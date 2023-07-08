import { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea"

export function TextInput() {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = () => {
    // Perform any desired action with the submitted text
    console.log("Submitted text:", textInput);
  };

  return (
    <div className="my-8">
      <p className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">Write any other specifications here.</p>
      <Textarea 
      className="my-10 text-white"
      placeholder="Example. Must have at least 2 seasons and be on Netflix."
      value={textInput}
      onChange={handleTextChange}
       />
      <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
      onClick={handleSubmit}>
        Create My List
      </button>
    </div>
  );
}
