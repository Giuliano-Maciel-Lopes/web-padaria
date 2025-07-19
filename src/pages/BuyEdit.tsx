import { useAuth } from "../hooks/context/useAuth";
import { Buy } from "../components/buyedit & create/buy";
import { Edit } from "../components/buyedit & create/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { useEdit } from "../hooks/products/useEdit";
import { useFile } from "../hooks/uploads/usefile";
import { useOutletContext, useParams } from "react-router-dom";
import type { Product } from "../types/api/products/producsts";
import { useCreateProduct } from "../hooks/products/useCreateProduct";
import { TopBanner } from "../components/index/banner";
import { AsidebuyCart } from "../components/cart buy/asidebuyCart";


export function BuyEditPage() {
  const BaseUrl = import.meta.env.VITE_BASE_API;
  const { session } = useAuth();
  const isHome = session?.datauser.role === "STOCK";
  const confEdit = useToggle();
  const Asidecartbuy = useToggle();
  const { product } = useOutletContext<{ product: Product }>();

  const { id } = useParams<{ id?: string }>();
  const isCreate = !id;

  //create and edit
  const create = useCreateProduct();
  const edit = useEdit(product, id);

  const hook = isCreate ? create : edit;

  const fileState = useFile(hook.setImageUrl);

  async function handleConfirm() {
    if (fileState.file) {
      console.log("fileState.file:", fileState.file);
      const imagePath = await fileState.onSUbmit(hook.category);
      console.log("imagePath recebido:", imagePath);

      if (isCreate) {
        await create.onCreateEdit(imagePath);
      } else {
        await edit.onCreateEdit(imagePath);
      }
    } else {
      if (isCreate) {
        await create.onCreateEdit();
      } else {
        await edit.onCreateEdit();
      }
    }
    console.log(isCreate ? "✅ Produto criado" : "✅ Produto editado");
    confEdit.closed();
  }

  return (
    <div className="px-5">
      {hook.successMessage && <TopBanner message={hook.successMessage} />}

      {isHome ? (
        <Edit
          fileError={fileState.error}
          isCreate={isCreate}
          product={product}
          onSetFile={fileState.setFile}
          file={fileState.file}
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
