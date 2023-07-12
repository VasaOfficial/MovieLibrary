import { ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea"

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="my-8">
      <p className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">Write any other specifications here.</p>
      <Textarea 
      className="my-10 text-white"
      placeholder="Example. Must have at least 2 seasons and be on Netflix."
      value={value} onChange={onChange}
       />
    </div>
  );
}
