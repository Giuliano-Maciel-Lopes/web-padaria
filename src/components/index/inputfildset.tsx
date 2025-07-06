import { Fieldset } from "./fildset"
import { Input } from "./input"

type Props = React.ComponentProps<"input"> &{
    legend?:string
    type?:string
}



export function Fildinput({ type="text" , legend , className ="", ...rest}:Props){
    return(
       
       <Fieldset legend={legend}>




      <Input type={type}  {...rest} className={`w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${className} `}  />
      </Fieldset>


    )
    
}