import { Input } from "./input";
import { LayoutAuth } from "../layouts/layout-auth";
import { Button } from "../button";

type Props ={
  oncloseAuth:()=> void
}


export function AsideLoguin({oncloseAuth}:Props) {
  return (
    
        <LayoutAuth onLayout={oncloseAuth}>
          
          <Input legend="email" placeholder="ex: @gmail.com"/>
          <Input legend="senha" placeholder="digite sua senha"/>

          <Button className="w-10"/>
          
            

        </LayoutAuth>
  
  );
}