import type React from "react";
import logo from "../../assets/logoEscrita (2).png";
type Props = React.ComponentProps<"img">;

export function LogoEscrita({ ...rest }: Props) {
  return (
    <div {...rest}>
      <img
        {...rest}
        src={logo}
        alt="Logo Bottom"
        className="w-20 h-5 md:w-50 md:h-10 object-cover"
       
      />
    </div>
  );
}
