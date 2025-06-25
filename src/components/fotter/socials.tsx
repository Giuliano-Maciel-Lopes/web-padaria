import type { ComponentProps } from "react";


type Props = ComponentProps<"a"> & {
  href: string
  logo:string

}

export function Socials({href, logo,  ...rest }:Props) {
  return (
    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white cursor-pointer">
      <a {...rest} href={href}>
        <img src={logo} alt="icone da redes sociais" />
      </a>
    </div>
  );
}
