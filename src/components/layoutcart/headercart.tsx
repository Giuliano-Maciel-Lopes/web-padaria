
import { LogoEscrita } from "../index/logoescrita";
import { ToGoOut } from "../index/toGoOut";


export function HeaderCart() {
  return (
    <div className="py-6 px-4 bg-header flex justify-between items-center">
      
        <LogoEscrita/>
        <ToGoOut/>
      
    </div>
  );
}