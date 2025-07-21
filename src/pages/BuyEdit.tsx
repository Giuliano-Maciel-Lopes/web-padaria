import { useAuth } from "../hooks/context/useAuth";
import { Buy } from "../components/buyedit & create/buy";
import { Edit } from "../components/buyedit & create/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { useFile } from "../hooks/uploads/usefile";
import { useOutletContext, useParams } from "react-router-dom";
import type { Product } from "../types/api/products/producsts";
import { useCreateProduct } from "../hooks/products/useCreateProduct";
import { TopBanner } from "../components/index/banner";
import { AsidebuyCart } from "../components/cart buy/asidebuyCart";
import { useState } from "react";

export function BuyEditPage() {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const BaseUrl = import.meta.env.VITE_BASE_API;
  const { session } = useAuth();
  const isHome = session?.datauser.role === "STOCK";
  const confEdit = useToggle();
  const Asidecartbuy = useToggle();
  const { product } = useOutletContext<{ product: Product }>();

  const { id } = useParams<{ id?: string }>();
  const isCreate = !id;

  //create and edit
  const hook = useCreateProduct(product);

  const { category, file, setFile, onSUbmit, setcategory, error } = useFile(
    (url) => {
      hook.setValue("imageUrl", url);
    }
  );

  async function handleConfirm() {
    setUploadError(null);

    if (file && category) {
      const imagePath = await onSUbmit(category);
      if (!imagePath) {
        setUploadError(
          "Erro no upload: verifique categoria e arquivo  Apenas JPEG e PNG são permitidos."
        );
     confEdit.closed();   return; 
      }
      hook.setValue(
        "imageUrl",
        imagePath.startsWith("/") ? imagePath : "/" + imagePath
      );
    } else if (!file && !category && !isCreate) {
      hook.setValue("imageUrl", product.imageUrl);
    } else if (file && !category) {
      setUploadError("Categoria é obrigatória quando enviar imagem.");
    confEdit.closed();  return; 
    }

    await hook.onCreateEdit();
    confEdit.closed();
  }

  return (
    <div className="px-5">
      {isHome ? (
        <Edit
          erroUpload={uploadError ?? ""}
          oncategory={setcategory}
          fileError={error}
          isCreate={isCreate}
          product={product}
          onSetFile={setFile}
          file={file}
          edit={hook}
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
