import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { genres } from "db/genres";

export function LabelDemo() {
  return (
    <div className="flex items-center flex-wrap  ">
      {genres.map((item) => (
        <div key={item.id} className="flex items-center m-2">
          <Checkbox id={item.id} />
          <Label className="text-white ml-2" htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}
