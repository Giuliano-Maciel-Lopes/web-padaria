import { Fieldset } from "./fildset"

type Props = React.ComponentProps<"select"> &{
    legend?:string
}



export function Select({legend , children,  ...rest}:Props){
    return(
       
       <Fieldset legend={legend}>


      <select   
      {...rest}
       className="w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow" value={""} >

      
        <option value="" disabled hidden>selecione</option>
          {children}
        </select>

      </Fieldset>


    )
     
}