import estoqueImg from "../../assets/estoque.avif";
import relatorioImg from "../../assets/relatorio.avif";
import entregasImg from "../../assets/entregas.png";

export const BoxSessionUtils = [
  {
    title: "Relatórios",
    description: "graficos de vendas",
    img: relatorioImg,
    path: "/reports",
  },
  {
    title: "Estoque",
    description: "vizualize os produtos do estoque",
    img: estoqueImg,
    path: "/category",
  },
  {
    title: "Pedidos",
    description: "vizualize todos os pedidos",
    img: entregasImg,
    path: "/orders",
  },
];
