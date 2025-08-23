import { Button } from "../index/button";
import menos from "../../assets/menos.svg";
import mais from "../../assets/mais.svg";

type Props = {
  quantity: number;
  onChange: (newQuantity: number) => void;
  className?:string
}

export function QuantityBuy({className ,quantity , onChange}:Props) {
   
  return (
   <div className={`flex border-1 w-35 ${className}`}>
          <Button
             onClick={() => {
          if (quantity> 1) onChange(quantity - 1);
        }}
            variant="square"
            colorVariant="bg"
          >
            <img src={menos} alt="sinal de menos" />
          </Button>
          <div className="flex items-center justify-center h-12 w-12">
            <span className="text-2xl">{quantity}</span>
          </div>
          <Button
           onClick={() => onChange(quantity + 1)}
            className=""
            variant="square"
            colorVariant="bg"
          >
            <img src={mais} alt="sinal de mais" />
          </Button>
        </div>
  );
}