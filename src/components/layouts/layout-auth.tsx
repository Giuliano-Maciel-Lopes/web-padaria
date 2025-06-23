import { Logo } from "../logo";
import { IconButton } from "../header/iconButton";
import x from "../../assets/x.svg";
import type React from "react";
type Props = {
  children?: React.ReactNode;
  onLayout: () => void;
};

export function LayoutAuth({ children, onLayout }: Props) {
  return (
    <div className=" h-screen w-full flex items-center justify-center sticky my-20 z-50">
      <main className=" md:px-6 px-4 relative rounded-3xl flex flex-col  pt-4 md:w-[600px] md:max=h-[600px] w-[300px] max-h-[500px] bg-login md">
        <IconButton
          onClick={onLayout}
          animation
          className=" absolute top-4 right-4"
        >
          <img src={x} alt="icone x" />
        </IconButton>
        <div className="flex items-center justify-center">
          <Logo />
        </div>

        <div className="flex flex-col gap-4 py-4">
        {children}
        </div>

      </main>
    </div>
  );
}
