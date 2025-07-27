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
  const isHome = session?.datauser.role === "STOCK";
  const confEdit = useToggle();
  const Asidecartbuy = useToggle();
  const { product } = useOutletContext<{ product: Product }>();
  const { id } = useParams<{ id?: string }>();

  const isCreate = !id;

  const form = useCreateProductForm(product);
  const { handleSubmit, setValue, watch } = form;
  const { mutate, isPending } = useCreateEdit(product);
  const { error, file, onSubmit, setFile } = useFile();

  const category = watch("category"); 

const handleConfirm = async () => {
  console.log("➡️ Iniciando handleConfirm");

  if (file) {
    console.log("📁 File presente:", file);
    console.log("📂 Categoria enviada para onSubmit:", category);

    const resPath = await onSubmit(category);

    console.log("📸 Caminho da imagem retornado:", resPath);

    if (resPath) {
      setValue("imageUrl", `/${resPath}`);
      console.log("✅ imageUrl setado no form:", resPath);
    }

    handleSubmit((dataForm) => {
      console.log("📤 Enviando form com file:", dataForm);
      mutate({ data: dataForm, product });
    })();
  } else {
    console.log("⚠️ Nenhum file presente. Submetendo form direto.");
    handleSubmit((dataForm) => {
      console.log("📤 Enviando form sem file:", dataForm);
      mutate({ data: dataForm, product });
    })();
  }
};


  return (
    <div className="px-5">
      {isHome ? (
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
          mensagem="tem certeza que deseja alterar"
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
