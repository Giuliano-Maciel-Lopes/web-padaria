import type React from "react";

type Props = {
    children: React.ReactNode
    href: string
}


export function Li({  href, children }:Props) {
  return (
    
        <li className="border border-gray-600 font-bold text-2xl  text-amber-950"  >
            <a  className=" block h-full w-full"href={href}>{children}</a>
        </li>
    
  );
}