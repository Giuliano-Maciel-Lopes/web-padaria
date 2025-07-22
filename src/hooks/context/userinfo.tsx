
import { useContext } from "react";
import {UserInfoContext} from "../../context/useinfo-context"


export function useUserInFocontext() {
  const context = useContext(UserInfoContext);
  if (!context) {
  throw new Error("erro no context useuserinfo");
}


  return context;
}
