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
  const hook = useCreateProduct(product);

  const{category , file , setFile , onSUbmit , setcategory , error} = useFile((url) => {
    hook.setValue("imageUrl", url);
  });

async function handleConfirm() {
   if (file && category) {
    let imagePath = await onSUbmit(category);

    if (!imagePath.startsWith("/")) {
      imagePath = "/" + imagePath;
    }

    hook.setValue("imageUrl", imagePath);
  } else if (!file && !category && !isCreate) {
    // Caso esteja editando e não trocou imagem, mantém a imagem antiga
    hook.setValue("imageUrl", product.imageUrl);
  }


  await hook.onCreateEdit();
  console.log(isCreate ? "✅ Produto criado" : "✅ Produto editado");
  confEdit.closed();
}

  return (
    <div className="px-5">
  

      {isHome ? (
        <Edit
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
