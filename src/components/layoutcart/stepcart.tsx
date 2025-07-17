import { useNavigate } from "react-router";
import { Button } from "../index/button";
import { useLocation } from "react-router";

export function StepCart() {
  const navigate = useNavigate();
  const location = useLocation();

  const isCart = location.pathname === "/cart";
  const isIdentification = location.pathname === "/cart/identification";
  const isPayment = location.pathname === "/cart/payment";

  return (
    <div className="flex items-center justify-center text-white">
      <Button
        onClick={() => navigate("/cart")}
        colorVariant={isCart ? "cart" : undefined}
        variant="stepcart"
        className={` ${isCart ? " clip-right" : ""} ${
          isIdentification ? "clip-right" : ""
        } ${isPayment ? "clip-right" : ""} `}
      >
        Carrinho
      </Button>

      <Button
           onClick={() => isPayment && navigate("/cart/identification")}
      colorVariant={isIdentification ? "cart" : undefined}
        variant="stepcart"
        className={` ${isIdentification ? " clip-right " : ""}  ${
          isCart ? "clip-left-inverted-shape" : ""
        }  ${isPayment ? "clip-right" : ""}` }
      >
        Identificaçao
      </Button>

      <Button
       
        colorVariant={isPayment ? "cart" : undefined}
        variant="stepcart"
        className={` ${isPayment ? "clip-left-inverted-shape" : ""} ${
          isIdentification ? "clip-left-inverted-shape" : ""
        } `}
      >
        Pagemento
      </Button>
    </div>
  );
}
