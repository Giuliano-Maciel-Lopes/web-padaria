import { Logo } from "../logo";
import { IconButton } from "../layoutbakery/header/iconButton";
import { Button } from "../button";
import x from "../../assets/x.svg";
import type React from "react";
import type { ReactNode } from "react";

type Props = {
  children?: React.ReactNode;
  onLayout: () => void;
  nameBtn: string;
  title: ReactNode;
  nameBtn2: string;
  toggleAuth: () => void;
  className?: string
};

export function LayoutAuth({
  toggleAuth,
  title,
  nameBtn2,
  className="",
  nameBtn,
  children,
  onLayout,
}: Props) {
  return (
    <div className=" h-screen w-full flex items-center justify-center fixed bg-black/40 z-50">
      <aside
        className={`overflow-y-auto  md:px-6 px-4 relative rounded-3xl flex flex-col  pt-4 md:w-[500px] md:max-h-[90vh] w-[300px] max-h-[90vh] bg-login md ${className} `}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <IconButton
          onClick={onLayout}
          animation
          className=" absolute top-4 right-4"
        >
          <img src={x} alt="icone x" />
        </IconButton>
        <div className="flex flex-col  items-center justify-center">
          <Logo />
          <h3>{title}</h3>
        </div>

        <div className="flex flex-col gap-4 py-4">{children}</div>

        <div className="flex flex-col items-center gap-8 mt-8 py-4">
          <Button>{nameBtn}</Button>

          <Button onClick={toggleAuth} colorVariant="secund">
            {nameBtn2}
          </Button>
        </div>
      </aside>
    </div>
  );
}
