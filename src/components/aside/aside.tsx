import { Li } from "./li";

export function Aside() {
  return (
    <div>
      <aside className=" bg-header h-screen w-screen top-0 fixed md:w-80 z-50">
        <nav>
          <ul className="flex flex-col gap-2 " >
            <Li href="">SOBRE</Li>
            <Li href="">SOBRE</Li>
            <Li href="">SOBRE</Li>
            <Li href="">SOBRE</Li>
            <Li href="">SOBRE</Li>
            <Li href="">SOBRE</Li>
           
          </ul>
        </nav>
      </aside>
        
      
    </div>
  );
}