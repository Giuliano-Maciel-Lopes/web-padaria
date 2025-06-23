type Props = React.ComponentProps<"input"> &{
    legend?:string
}



export function Input({legend ,  ...rest}:Props){
    return(
       
        <fieldset className="flex flex-1 focus-within:text-green-100" >

            { legend&& 
                <legend  className="uppercase text-xs m-1.5" >
                {legend}
                </legend>
            }




      <input type="text"  {...rest} className="w-full text-gray-200 h-12 rounded-lg border border-gray-300 p-2 outline-none focus:border-green-600"  />
      </fieldset>


    )
     
}