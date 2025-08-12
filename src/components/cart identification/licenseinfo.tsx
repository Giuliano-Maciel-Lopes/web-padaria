import { useAuthModal } from "../../hooks/context/asideauth";
import { useAuth } from "../../hooks/context/useAuth";
import { useUserInFocontext } from "../../hooks/context/userinfo";
import { Button } from "../index/button";


export function LicenseInfo() {
  const user = useAuth()
  const { userInfo } = useUserInFocontext();
  const {userInfo:userInfoModal}=  useAuthModal()
  if(!user.session?.token) return

  if (!userInfo) {
    return (
      <div className="w-full md:w-[25rem] bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm text-center">
        <p className="text-gray-600">
          Nenhuma informação de endereço cadastrada.
        </p>
        <Button onClick={userInfoModal.open}>Adicionar endereço</Button>
      </div>
    );
  }
  const address = [

    { label: "Rua", value: userInfo.street },
    { label: "Número", value: userInfo.houseNumber },
    { label: "Bairro", value: userInfo.neighborhood },
    { label: "Cidade", value: userInfo.city },
    { label: "Telefone", value: userInfo.phone },
  ];

  return (
    <div className="w-full md:w-[25rem] bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Informações de Endereço
      </h3>

      <div className="text-gray-700 flex flex-col gap-1 mb-5">
        {address.map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span className="font-medium">{label}</span>
            <span>{value}</span>{" "}
          </div>
        ))}
      </div>
     <Button onClick={userInfoModal.open}>Mudar localidade</Button>
    </div>
  );
}
