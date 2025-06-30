import { Logo } from "../index/logo";
import { IconButton } from "../layoutbakery/header/iconButton";
import { Button } from "../index/button";
import x from "../../assets/x.svg";
import type React from "react";
import type { ReactNode } from "react";

type Props = {
  children?: React.ReactNode;
  onLayout: () => void;
  title: ReactNode;
  nameBtn2: string;
  toggleAuth: () => void;
  className?: string;
};

export function LayoutAuth({
  toggleAuth,
  title,
  nameBtn2,
  className = "",
  children,
  onLayout,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <aside
        className={`relative flex flex-col rounded-3xl bg-login md:w-[500px] w-[300px] max-h-[90vh] md:px-6 px-4 pt-4 ${className}`}
      >
        <IconButton
          onClick={onLayout}
          animation
          className="absolute top-4 right-4"
        >
          <img src={x} alt="icone x" />
        </IconButton>

        <div className="flex flex-col items-center justify-center mb-2">
          <Logo />
          <h3>{title}</h3>
        </div>

        <div className="overflow-y-auto flex-grow min-h-0">
          <div className="flex flex-col gap-4 py-4">{children}</div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-4 py-4">
         
          <Button onClick={toggleAuth} colorVariant="secund">
            {nameBtn2}
          </Button>
        </div>
      </aside>
    </div>
  );
}
