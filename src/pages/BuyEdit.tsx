import { useAuth } from "../hooks/auth/useAuth";
import { Buy } from "../components/buyedit/buy";
import { Edit } from "../components/buyedit/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { useEdit } from "../hooks/products/useEdit";
import { useFile } from "../hooks/uploads/usefile";
import { useProductId } from "../hooks/products/useProductId";
import { useEffect } from "react";

export function BuyEditPage() {
  const { session } = useAuth();
  const isHome = session?.datauser.role === "STOCK";
  const baseUrl = import.meta.env.VITE_BASE_API;
  const confEdit = useToggle();
  const { products, onView } = useProductId();
  const edit = useEdit();
  const fileState = useFile(edit.setImageUrl);

  useEffect(() => {
    onView();
  }, []);

  async function handleConfirm() {
    //criar um hook handle confirm depois
    if (fileState.file) {
      const imagePath = await fileState.onSUbmit(edit.category);

      await edit.OnEdit(imagePath); // passa direto a URL
    } else {
      await edit.OnEdit(); // sem imagem nova, usa o estado
    }

    console.log("✅ Produto editado");
    confEdit.closed();
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen  ">
      <div className=" h-auto items-center justify-center md:w-1/2">
        <img
          src={`${baseUrl}${products?.imageUrl}`}
          alt=""
          className="object-contain h-full"
        />
      </div>
      <div className="md:w-1/2 w-full">
        {isHome ? (
          <Edit
            product={products}
            onSetFile={fileState.setFile}
            file={fileState.file}
            edit={edit}
            onAside={confEdit.open}
          />
        ) : (
          <Buy />
        )}
        {confEdit.isOpen && (
          <ConfirmLogout
            mensagem="tem certeza que deseja alterar"
            onCancel={confEdit.closed}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
}
