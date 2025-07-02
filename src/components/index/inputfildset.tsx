import { Input } from "./input"

type Props = React.ComponentProps<"input"> &{
    legend?:string
}



export function Fildinput({legend ,  ...rest}:Props){
    return(
       
        <fieldset className="flex flex-1 focus-within:text-amber-950" >

            { legend&& 
                <legend  className="uppercase text-xs m-1.5" >
                {legend}
                </legend>
            }




      <Input type="text"  {...rest} className="w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow"  />
      </fieldset>


    )
    
}