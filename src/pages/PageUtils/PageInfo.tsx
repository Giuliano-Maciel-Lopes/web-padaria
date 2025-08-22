
import { Painel } from "../../components/layoutadmin/painel";


export function PageInfo() {
  return (
    <div className="flex flex-col min-h-screen items-center gap-6 p-6 relative mt-5">
      <Painel  title="SEJA BEM-VINDO ÀS INFORMAÇÕES DA PADARIA" />
      <div className="text-justify leading-relaxed text-gray-700">
        <p>
          Este projeto é uma aplicação fictícia desenvolvida para fins de portfólio, 
          não representa uma padaria real. A ideia foi criar um sistema completo, do backend ao frontend, 
          que simula o funcionamento de uma padaria, permitindo o gerenciamento de pedidos, cardápio e informações dos clientes.
        </p>
        <p className="mt-4">
          Como desenvolvedor full stack freelancer, utilizei esta aplicação para demonstrar minhas habilidades técnicas em diversas áreas, incluindo:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Desenvolvimento de APIs RESTful e manipulação de banco de dados, garantindo alta performance e segurança.</li>
          <li>Criação de interfaces responsivas e intuitivas, proporcionando uma ótima experiência para o usuário.</li>
          <li>Implementação de autenticação, controle de acesso e atualizações em tempo real.</li>
        </ul>
        <p className="mt-4">
          Este projeto reflete minha capacidade de entregar soluções completas, desde o planejamento até o deploy, demonstrando domínio em tecnologias modernas e boas práticas de desenvolvimento.
        </p>
        <p className="mt-4">
          Estou aberto a novos desafios e projetos freelancers, onde posso aplicar minha experiência para transformar ideias em aplicações funcionais e escaláveis.
        </p>
      </div>
    </div>
  );
}
