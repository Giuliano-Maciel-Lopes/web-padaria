import { Button } from "./button";
import cicle from "../..//assets/circle-plus.svg"

export function ProductCreat() {
  return (
    <div className=" gap-10 border-2 border-gray-300 rounded-xl shadow-md p-4 flex flex-col min-h-[280px] items-center justify-center  w-full bg-white">
      <Button variant="add" colorVariant="primary" className="h-[180px]">
        <img src={cicle} alt="" className="h-16 w-16 " />
      </Button>
      <p> NOVO PRODUTO</p>
    </div>
  );
}
