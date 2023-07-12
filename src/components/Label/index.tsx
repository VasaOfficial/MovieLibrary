'use client'
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { genres } from "db/genres";

interface LabelDemoProps {
  onGenresChange: (genres: string[]) => void;
}

export function LabelDemo({ onGenresChange }: LabelDemoProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleCheckboxChange = (genreId: string) => {
    setSelectedGenres((prevSelectedGenres) => {
      if (prevSelectedGenres.includes(genreId)) {
        return prevSelectedGenres.filter((id) => id !== genreId);
      } else {
        return [...prevSelectedGenres, genreId];
      }
    });
  
    onGenresChange([...selectedGenres, genreId]);
  };

  return (
    <div className="flex items-center flex-wrap  ">
      {genres.map((item) => (
        <div key={item.id} className="flex items-center m-2">
          <Checkbox 
          id={item.id} 
          checked={selectedGenres.includes(item.id)}
          onCheckedChange={() => handleCheckboxChange(item.id)}
           />
          <Label className="text-white ml-2" htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}
