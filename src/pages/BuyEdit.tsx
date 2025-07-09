import { useAuth } from "../hooks/auth/useAuth";
import { Buy } from "../components/buyedit/buy";
import { Edit } from "../components/buyedit/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { useEdit } from "../hooks/products/useEdit";
import { useFile } from "../hooks/uploads/usefile";
import { useOutletContext } from "react-router";
import type { Product } from "../types/api/producsts";
interface ContextType {
  products: Product;
}

export function BuyEditPage() {
  const { session } = useAuth();
  const isHome = session?.datauser.role === "STOCK";
  const baseUrl = import.meta.env.VITE_BASE_API;
  const confEdit = useToggle();
 const { products } = useOutletContext<ContextType>();
  const edit = useEdit(products);
  const fileState = useFile(edit.setImageUrl);

  

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
    
       <div>
      
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
     
  );
}
