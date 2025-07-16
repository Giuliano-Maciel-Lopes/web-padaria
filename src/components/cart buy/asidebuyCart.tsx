import { useEffect } from "react";
import { useNavigate } from "react-router";
import x from "../../assets/x.svg";
import { Button } from "../index/button";
import { IconButton } from "../layoutbakery/header/iconButton";
import { currencyBRL } from "../../utils/currencyBRL";

type Props = {
  img?: string;
  name: string;
  category: string;
  price:number

  onclosed: () => void;
  
};

export function AsidebuyCart({ img, name, category, onclosed,price }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(onclosed, 4000);
    return () => clearTimeout(timer);
  }, [onclosed]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center md:justify-end bg-black/40">
      <div className="w-full h-1/3 md:w-1/2 md:h-50 max-w-md bg-white shadow-xl rounded-xl p-4 animate-slide-up gap-4">
        <div className="flex justify-end">
          <IconButton onClick={onclosed} animationbase>
            <img src={x} alt="Fechar" />
          </IconButton>
        </div>

        <div className="flex gap-4">
          <img src={img} alt="Imagem do item" className="w-16 h-16 object-cover rounded" />

          <div className="flex flex-col justify-between">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{category}</p>
            <p className="text-sm text-gray-600">preço: {currencyBRL(price)}</p>
          </div>
        </div>

        <div className="mt-4">
          <Button onClick={() => navigate("../../cart")}>Ir para o carrinho</Button>
        </div>
      </div>
    </div>
  );
}
