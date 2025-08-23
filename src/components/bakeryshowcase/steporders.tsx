
export function StepOrders() {
  const message = [
    {
      number: 1,
      title: "Carrinho",
      msg: "Faça login, navegue pelo cardápio, selecione seus produtos e adicione ao carrinho",
    },
    {
      number: 2,
      title: "Entrega e Pagamento",
      msg: "Escolha se quer receber em casa ou retirar na loja e selecione a forma de pagamento",
    },
    {
      number: 3,
      title: "Preparação e Entrega",
      msg: "Seu pedido será produzido com cuidado e entregue pelo nosso motorista com qualidade, agilidade e praticidade",
    },
  ];
  return (
    <div className="mb-10">
      <h1 className="text-xl md:text-3xl font-extrabold text-amber-700 text-center my-8">
        Como realizar o seu pedido?
      </h1>

      <div className="w-full h-auto flex flex-col md:flex-row items-center gap-4 px-3">
        {message.map((props) => (
          <div
            key={props.number}
            className="w-full h-auto flex flex-col  items-center  text-amber-950 gap-6"
          >
            <span className="text-lg font-bold rounded-full h-8 w-8 flex items-center justify-center border-2 border-amber-700">
              {props.number}
            </span>
            <div className="flex flex-col items-center gap-7">
              <h1 className="text-xl font-semibold">{props.title}</h1>
              <p>{props.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
