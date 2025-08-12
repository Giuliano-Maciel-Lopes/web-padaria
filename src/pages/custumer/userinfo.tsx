import { License } from "../../components/cart identification/license";
import { LicenseInfo } from "../../components/cart identification/licenseinfo";
import { useAuth } from "../../hooks/context/useAuth";
import { Painel } from "../../components/layoutadmin/painel";

export function UserInfoPage() {
  const { session } = useAuth();
  const auth = session?.token

  return (
    <div className="flex items-center flex-col gap-4 mt-5">
      
      <Painel 

        title="Informações do usuário" 
        subTitle="Gerencie seus dados pessoais e mantenha tudo atualizado"
      />

      <div className="flex flex-col gap-4 items-center">
        <License
        auth={!!auth}
          name={session?.datauser.name}
          email={session?.datauser.email}
        />
        <LicenseInfo />
      </div>
    </div>
  );
}
