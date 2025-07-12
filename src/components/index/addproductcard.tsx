import { Button } from "./button";
import cicle from "../..//assets/circle-plus.svg";
import { useNavigate } from "react-router-dom";

export function AddProductCard() {
  const navigate = useNavigate();
  return (
    <div className=" gap-10 border-2 border-gray-300 rounded-xl shadow-md p-4 flex flex-col min-h-[280px] items-center justify-center  w-full bg-white">
      <Button
        onClick={() => navigate("/products/newproduct")}
        variant="add"
        colorVariant="bg"
        className="h-[180px]"
      >
        <img src={cicle} alt="" className="h-16 w-16 " />
      </Button>
      <p> NOVO PRODUTO</p>
    </div>
  );
}
