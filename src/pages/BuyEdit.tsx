import { useAuth } from "../hooks/auth/useAuth";
import { Buy } from "../components/buyedit & create/buy";
import { Edit } from "../components/buyedit & create/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { useEdit } from "../hooks/products/useEdit";
import { useFile } from "../hooks/uploads/usefile";
import { useOutletContext, useParams } from "react-router";
import type { Product } from "../types/api/producsts";
import { useCreateProduct } from "../hooks/products/useCreateProduct";

interface ContextType {
  products: Product;
}

export function BuyEditPage() {
  const { session } = useAuth();
  const isHome = session?.datauser.role === "STOCK";
  const confEdit = useToggle();
 const { products } = useOutletContext<ContextType>();

const { id } = useParams<{ id?: string }>();
  const isCreate = !id;

  //create and edit 
  const create = useCreateProduct();
  const edit = useEdit(products ,id);

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
  }
  
  else {
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
    
       <div>
      
        {isHome ? (
          <Edit 
          isCreate={isCreate}
            product={products}
            onSetFile={fileState.setFile}
            file={fileState.file}
            edit={hook}
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
