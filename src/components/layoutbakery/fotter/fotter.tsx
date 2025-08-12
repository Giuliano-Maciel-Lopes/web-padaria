import { LogoEscrita } from "../../index/logoescrita";
import { Socials } from "./socials";
import insta from "../../../assets/Instagram.svg"
import Facebook from "../../../assets/Facebook.svg";
import twwiter from "../../../assets/Twitter.svg";
import email from "../../../assets/Email.svg";
import local from "../../../assets/🔹 Primary Color.svg";
import phone from "../../../assets/call.svg";

export function Fotter() {
  return (
    <footer className="bg-footer w-full flex flex-col h-auto md:h-100 px-8 text-[#F5EDE3]">
      <div className="max-w-[100rem] w-full mx-auto flex  flex-col md:flex-row gap-8">
        <div className="py-8  flex flex-col gap-8 md:w-1/3">
          <LogoEscrita />
          <p>
            Há mais de 10 anos, a Padaria Mineira Delícias tem levado o sabor e
            o carinho das tradições de Minas para a sua mesa. Com receitas
            caseiras e ingredientes selecionados, oferecemos produtos
            fresquinhos e feitos com dedicação, para tornar cada momento mais
            especial. Aqui, você encontra aquele gostinho de casa, feito com
            amor e respeito pela cultura mineira.
          </p>
          <div className="flex gap-6 ">
            <Socials logo={Facebook} href="https://www.instagram.com/giulianomaciel/" />
            <Socials logo={insta} href="https://www.instagram.com/giulianomaciel/" />
            <Socials logo={twwiter} href="https://www.instagram.com/giulianomaciel/" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 gap-6 justify-between items-center md:px-10 py-8 ">
          <div className="flex flex-col  gap-20 ">
            <div>
              <h2 className="text-lg font-semibold">
                Horário de Funcionamento
              </h2>
              <p>Seg a Sex: 07h às 19h</p>
              <p>Sábado: 07h às 18h</p>
              <p>Domingo: fechado </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Contato</h2>
              <p className="flex items-center gap-2">
                {" "}
                <img src={local} alt="" />
                Rua padaria das graca , 123 - Ipatinga, MG
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <img src={phone} alt="" />
                (31) xxxx-xxxx
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <img src={email} alt="" />
                padariamineira@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mb-30">
            <h2 className="text-lg font-semibold mb-2">Serviços</h2>
            <ul className="list-disc list-inside  space-y-1 text-sm">
              <li> Encomendas personalizadas para eventos</li>
              <li> Entregas em domicílio (Ipatinga e região)</li>
              <li> Café da manhã completo</li>
              <li> Lanches e salgados fresquinhos o dia todo</li>
              <li> Cestas de café para presente</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
