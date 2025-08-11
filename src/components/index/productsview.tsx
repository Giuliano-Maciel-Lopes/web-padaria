import car from "../../assets/carrinho.png";
import { useAuth } from "../../hooks/context/useAuth";
import { Button } from "./button";
import remove from "../../assets/remove.svg";
import { IconButton } from "../layoutbakery/header/iconButton";
import { useToggle } from "../../hooks/useToggle";
import { ConfirmLogout } from "../layoutbakery/asideMenu/confirmlogout";
import { useDelete } from "../../hooks/products/usedelete";
import type { Product } from "../../types/api/products/producsts";
import { Input } from "./input";
import { useState } from "react";
import { useUpdateToggleActive } from "../../hooks/products/useupddateactive";

type Props = {
  product: Product;
  onBuy?: () => void;

  ispeding?: boolean;
};

export function ProductsView({ onBuy, product }: Props) {
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

  return (
    <div className="border-2 border-gray-300 rounded-xl shadow-md p-4 flex flex-col    w-full bg-white">
      {isHomeStock && (
        <div className="flex p-4 justify-between">
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
      <div className="flex flex-col items-center gap-4">
        <a href="#"  onClick={onBuy} className="w-full flex justify-center">
          <img
            src={`${baseUrl}${product.imageUrl}`}
            alt={`Imagem do produto ${product.name}`}
            className="object-contain w-52 h-36 bg-white "
          />
        </a>

        <span className="text-lg font-semibold text-amber-950 text-center">
          {product.name}
        </span>

        <span className="bg-footer text-white text-xl font-bold px-4 py-1 rounded-md shadow">
          R$ {product.price.toFixed(2)}
        </span>

        <Button
          onClick={onBuy}
          colorVariant="products"
          className="text-lg w-full py-2"
        >
          <div className="flex items-center justify-center gap-2">
            {!isHomeStock && (
              <img src={car} alt="Carrinho" className="w-5 h-5" />
            )}
            {isHomeStock ? "EDITAR" : "COMPRAR"}
          </div>
        </Button>
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
