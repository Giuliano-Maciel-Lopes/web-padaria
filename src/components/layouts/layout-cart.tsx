import { Outlet } from "react-router-dom";
import { HeaderCart } from "../layoutcart/headercart";
import { StepCart } from "../layoutcart/stepcart";
StepCart;

export function LayoutCartpage() {
  return (
    <div className="bg-beige h-full min-h-screen flex flex-col ">
      <HeaderCart />

      <div className="flex flex-col items-center my-12 ">
        <div className="max-w-[100rem] w-full flex flex-col">
          <StepCart />

          <div className="flex">
            <Outlet />
          </div>

          

        </div>
      </div>
    </div>
  );
}
