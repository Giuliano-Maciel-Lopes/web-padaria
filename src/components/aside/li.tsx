import type React from "react";

type Props = {
    children: React.ReactNode
    href: string
}


export function Li({  href, children }:Props) {
  return (
    
        <li className="border-t-2 border-gray-600 "  >
            <a href={href}>{children}</a>
        </li>
    
  );
}