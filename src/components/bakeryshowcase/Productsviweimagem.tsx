import car from "../../assets/carrinho.png";
import { useAuth } from "../../hooks/context/useAuth";
import { Button } from "../index/button";
import remove from "../../assets/remove.svg";
import { IconButton } from "../layoutbakery/header/iconButton";
import { useToggle } from "../../hooks/useToggle";
import { ConfirmLogout } from "../layoutbakery/asideMenu/confirmlogout";
import { useDelete } from "../../hooks/products/usedelete";
import type { Product } from "../../types/api/products/producsts";
import { Input } from "../index/input";
import { useState } from "react";
import { useUpdateToggleActive } from "../../hooks/products/useupddateactive";
import { currencyBRL } from "../../utils/currencyBRL";

type Props = {
  product: Product;
  onBuy?: () => void;

  ispeding?: boolean;
};

export function ProductsViewConditional({ onBuy, product }: Props) {
  const { session } = useAuth();
  const isHomeStock =
    session?.datauser.role === "STOCK" || session?.datauser.role === "ADMIN";

  const asideDelete = useToggle();
  const asideUpdate = useToggle();
  const { mutate, isPending } = useDelete();
  const baseUrl = import.meta.env.VITE_BASE_API;

  const [isActiveLocal, setIsActiveLocal] = useState<boolean>(product.isActive);
  const { mutate: mutateUpdate, isPending: ispedingUpdate } =
    useUpdateToggleActive();

  function handleupddate() {
    mutateUpdate(
      { product, isActive: !isActiveLocal },

      {
        onSuccess: () => {
          setIsActiveLocal(!isActiveLocal); // muda o estado visual só depois do sucesso
          asideUpdate.closed();
        },
      }
    );
  }
  console.log(`${baseUrl}${product.imageUrl}`);
  return (
    <div>
         {isHomeStock && (
          <div className="flex p-4 justify-between relative z-20 ">
            <div className="flex justify-end">
              <IconButton className="hover:scale-105 transition-transform">
                <img
                  onClick={asideDelete.open}
                  src={remove}
                  alt="Remover"
                  className="w-6 h-6"
                />
              </IconButton>
            </div>
            <div>
              <Input
                onChange={(e) => {
                  asideUpdate.open();
                }}
                checked={isActiveLocal}
                type="checkbox"
                className="w-10 h-6 rounded-full bg-gray-200 checked:bg-green-500 transition-colors duration-300"
              />
            </div>
          </div>
        )}
      <Button
        onClick={onBuy}
        colorVariant="bg"
        className="relative border-2 border-gray-300 rounded-xl shadow-md p-4 flex flex-col min-w-[170px] w-full h-64 flex-shrink-0"
      
      >
         <img
          src={encodeURI(baseUrl + product.imageUrl)}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
     
      </Button>

      <div className="flex flex-col  md:flex-row gap-4">
        <span className="text-lg font-semibold text-amber-950 text-center">
          {product.name}
        </span>

        <span className=" text-md font-bold  rounded-md shadow">
          {currencyBRL(product.price)}
        </span>
      </div>

      {asideDelete.isOpen && (
        <ConfirmLogout
          isloading={isPending}
          mensagem="tem certeza que deseja excluir"
          onCancel={asideDelete.closed}
          onConfirm={() => {
            mutate(product);
          }}
        />
      )}
      {asideUpdate.isOpen && (
        <ConfirmLogout
          isloading={ispedingUpdate}
          mensagem="tem certeza que deseja alterar o estado desse pedido"
          onCancel={asideUpdate.closed}
          onConfirm={() => handleupddate()}
        />
      )}
    </div>
  );
}
