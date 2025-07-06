import img from "../assets/rosquinhas - Copia.png";
import { useAuth } from "../hooks/useAuth";
import { Buy } from "../components/buyedit/buy";
import { Edit } from "../components/buyedit/edit";
import { ConfirmLogout } from "../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../hooks/useToggle";
import { useEdit } from "../hooks/useEdit";
import { useFile } from "../hooks/usefile";

export function BuyEditPage() {
  const { session } = useAuth();
  const isHome = session?.datauser.role === "STOCK";

  const confEdit = useToggle();

  const edit = useEdit(); // usa aqui e passa para os outro
  const fileState = useFile(edit.setImageUrl);

  async function handleConfirm() {
    if (fileState.file) {
    const imagePath = await fileState.onSUbmit(edit.category);
    console.log("✅ Upload finalizado");

    console.log("🛠 Chamando edição...");
    await edit.OnEdit(imagePath); // passa direto a URL
  } else {
    console.log("🛠 Chamando edição...");
    await edit.OnEdit(); // sem imagem nova, usa o estado
  }

  console.log("✅ Produto editado");
  confEdit.closed();
}


  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen  ">
      <div className=" h-auto items-center justify-center md:w-1/2">
        <img src={img} alt="" className="object-contain h-full" />
      </div>
      <div className="md:w-1/2 w-full">
        {isHome ? (
          <Edit
            onSetFile={fileState.setFile}
            file={fileState.file}
            edit={edit}
            onAside={confEdit.open}
          />
        ) : (
          <Buy />
        )}
        {confEdit.isOpen && (
          <ConfirmLogout onCancel={confEdit.closed} onConfirm={handleConfirm} />
        )}
      </div>
    </div>
  );
}
