import type React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

export function Li({ href, children }: Props) {
  return (
    <li className="border border-gray-600 font-bold text-2xl text-amber-950 rounded-md hover:bg-amber-200 transition-colors duration-200">
      <a
        href={href}
        className="block w-full h-full px-4 py-2"
        aria-label={`Navegar para ${children}`}
      >
        {children}
      </a>
    </li>
  );
}
