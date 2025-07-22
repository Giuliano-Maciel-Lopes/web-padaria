import { parasChemaUserInfo } from "../../schema/userInfo";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";

export function useUserInfoIndex() {    
  async function onviewUserInfo(userId: string): Promise<UserInfo | null> {
    const params = parasChemaUserInfo.parse({ userId });

    const { error, data } = await errorHandler(async () => {
      const response = await api.get<UserInfo>(`/user_infos/${params.userId}`);
      return response.data;
    });

    if (error) {
      alert(error.general || "Erro ao buscar informações do usuário");
      return null
    }

    return data ?? null;
  }

  return { onviewUserInfo };
}
