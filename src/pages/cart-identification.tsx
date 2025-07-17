import { License } from "../components/cart identification/license";
import { useAuth } from "../hooks/auth/useAuth";


export function CartIdentificationPage() {
  const {session} = useAuth()
  return (
    <div className="flex flex-col">
      <License/>
    
    </div>
  );
}