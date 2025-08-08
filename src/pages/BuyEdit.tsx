import { useAuth } from "../hooks/context/useAuth";
import { Buy } from "../components/buyedit & create/buy";
import { Edit } from "../components/buyedit & create/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { data, useOutletContext, useParams } from "react-router-dom";
import type { Product } from "../types/api/products/producsts";
import { AsidebuyCart } from "../components/cart buy/asidebuyCart";
import { useCreateProductForm } from "../hooks/products/useCreateEdit/form";
import { useFile } from "../hooks/uploads/usefile";
import { useCreateEdit } from "../hooks/products/useCreateEdit/query";

export function BuyEditPage() {
  const BaseUrl = import.meta.env.VITE_BASE_API;
  const { session } = useAuth();
  const isHomeStock =
    session?.datauser.role === "STOCK" || session?.datauser.role === "ADMIN";
  const confEdit = useToggle();
  const Asidecartbuy = useToggle();
  const { product } = useOutletContext<{ product: Product }>();
  const { id } = useParams<{ id?: string }>();

  const isCreate = !id;

  const form = useCreateProductForm(product);
  const { handleSubmit, setValue, watch } = form;

  const { mutate, isPending } = useCreateEdit();
  const { error, file, onSubmit, setFile } = useFile();

  const category = watch("category");

  const handleConfirm = async () => {
    console.log("➡️ Iniciando handleConfirm");

    if (file) {
      const resPath = await onSubmit(category);

      if (resPath) {
        setValue("imageUrl", `/${resPath}`);
      }

      handleSubmit((dataForm) => {
        mutate(
          { data: dataForm, product },
          {
            onSettled() {
              confEdit.closed();
            },
          }
        );
      })();
    } else {
      handleSubmit((dataForm) => {
        mutate(
          { data: dataForm, product },
          {
            onSettled() {
              confEdit.closed();
            },
          }
        );
      })();
    }
  };

  return (
    <div className="px-5">
      {isHomeStock ? (
        <Edit
          setFileChange={setFile}
          editCreat={form}
          fileError={error}
          isCreate={isCreate}
          product={product}
          onAside={confEdit.open}
        />
      ) : (
        <Buy onAside={Asidecartbuy.open} />
      )}
      {confEdit.isOpen && (
        <ConfirmLogout
         mensagem={isCreate ? "tem certeza que deseja criar?" : "tem certeza que deseja alterar?"}
          onCancel={confEdit.closed}
          onConfirm={handleConfirm}
          isloading={isPending}
        />
      )}
      {Asidecartbuy.isOpen && (
        <AsidebuyCart
          price={product.price}
          category={product.category}
          img={`${BaseUrl}${product.imageUrl} `}
          name={product.name}
          onclosed={Asidecartbuy.closed}
        />
      )}
    </div>
  );
}
