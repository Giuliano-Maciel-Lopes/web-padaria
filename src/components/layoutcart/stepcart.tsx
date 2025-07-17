import { useNavigate } from "react-router";
import { Button } from "../index/button";
import { useLocation } from "react-router";



export function StepCart() {
  const navigate = useNavigate()
  const location = useLocation()
  location.pathname.includes("cart")
  location.pathname.includes("identification")
  location.pathname.includes("payment")
  return (
    <div className="flex items-center justify-center text-white">
      <Button  variant="stepcart" className="rounded-none rounded-l-lg border-y-2 border-l-2 border-r-0 clip-right ">Carrinho</Button>
      <Button  colorVariant="cart" variant="stepcart" className="rounded-none clip-left-inverted-shape">identificaçao</Button>
      <Button variant="stepcart" className="rounded-none">pagemento</Button>
    </div>
  );
}
