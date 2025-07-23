import { useUserInFocontext } from "../../hooks/context/userinfo";
import { Button } from "../index/button";

export function LicenseInfo() {
  const { userInfo } = useUserInFocontext();

  if (!userInfo) {
    return (
      <div className="w-full md:w-[25rem] bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-sm text-center">
        <p className="text-gray-600">
          Nenhuma informação de endereço cadastrada.
        </p>
        <Button>Adicionar endereço</Button>
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

      <div className="text-gray-700 flex flex-col gap-1">
        {address.map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span className="font-medium">{label}</span>
            <span>{value}</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
