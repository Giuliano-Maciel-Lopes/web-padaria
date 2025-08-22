
import type React from "react";
import logo from "../../assets/LOGO.png";
type Props = React.ComponentProps<"img"> 

export function Logo({...rest}: Props) {
    return (
        <div {...rest}className=" ">
          <a href="/">
            <img {...rest} src={logo} alt="Logo Bottom" className="w-20 h-20 object-cover" />
            </a>
        </div>
    );
}