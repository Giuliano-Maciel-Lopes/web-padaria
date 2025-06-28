
import { Button } from "../index/button";

type Props = {
  name?: string;
  onActive?: () => void;
  active?:boolean
};

export function Buttoncategory({ active=false, onActive, name }: Props) {
  return (
    <Button
      colorVariant="bg"
      onClick={onActive}
      className={`border-4 border-gray-500 bg-beige w-auto h-6 md:h-13 px-5 rounded-lg  ${
        active ? "text-footer border-footer" : ""
      }  `}
    >
      {name}
    </Button>
  );
}
