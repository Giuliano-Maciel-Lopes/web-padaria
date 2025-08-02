import financeiroImg from "../../assets/finançass.avif"
import estoqueImg from "../../assets/estoque.avif";
import relatorioImg from "../../assets/relatorio.avif";
import entregasImg from "../../assets/entregas.png";
import usuariosImg from "../../assets/lupa.png"; // Crie ou ajuste essa imagem se não tiver

export const BoxSessionUtils = [
  {
    title: "Usuários",
    description: "Controle de usuários",
    img: usuariosImg,
    path: "/admin/users",
  },
  {
    title: "Financeiro",
    description: "Controle de vendas e pagamentos",
    img: financeiroImg,
    path: "/admin/finance",
  },
  {
    title: "Relatórios",
    description: "graficos de vendas",
    img: relatorioImg,
    path: "/admin/reports",
  },
  {
    title: "Estoque",
    description: "vizualize os produtos do estoque",
    img: estoqueImg,
    path: "/admin/stock",
  },
  {
    title: "Pedidos",
    description: "vizualize todos os pedidos",
    img: entregasImg,
    path: "/orders",
  },
];
