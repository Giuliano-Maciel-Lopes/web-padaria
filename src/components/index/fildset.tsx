import type React from "react";


type Props = {
    legend:string | undefined
    children: React.ReactNode
}

export function Fieldset({legend , children}:Props) {
  return (
      <fieldset className="flex flex-1 focus-within:text-amber-950" >

            { legend&& 
                <legend  className="uppercase text-xs m-1.5" >
                {legend}
                </legend>
            }
            {children}

    </fieldset>
  );
}