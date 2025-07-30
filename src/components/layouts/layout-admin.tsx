import { BoxSessions } from "../layoutadmin/boxSessions";
import { Painel } from "../layoutadmin/painel";
import { BoxSessionUtils } from "../../utils/admin/box-sessions";
import { useNavigate } from "react-router";

export function LayoutAdm() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:px-4 gap-10">
      <div className="flex flex-col items-center px-4 mt-3">
        <Painel />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {BoxSessionUtils.map((item) => (
          <BoxSessions
          key={item.title}
            description={item.description}
            img={item.img}
            title={item.title}
            onclick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  );
}
