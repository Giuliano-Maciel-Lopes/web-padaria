import { useNavigate } from "react-router";
import queijo from "../../assets/img carrosel/queijo.avif";
import { Button } from "../index/button";

export function PainelFodd() {
  const navigate = useNavigate();
  return (
    <section className="h-auto md:h-[400px] w-full bg-amber-50 flex flex-col md:flex-row mt-6 md:my-12">
      <div className="w-full md:w-1/2 bg-white md:relative">
        <img
          src={queijo}
          alt="Queijo Minas"
          className="md:absolute md:inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900">
          Queijo Minas
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-amber-700">
          A cidade do queijo
        </h2>
        <p className="text-base md:text-lg text-amber-900">
          Delicie-se com o autêntico sabor do queijo minas, produzido com
          tradição e qualidade. Um ícone da nossa região que leva sabor e
          história para a sua mesa.
        </p>
        <p className="text-base md:text-lg text-amber-900">
          Perfeito para acompanhar cafés, pães fresquinhos e receitas especiais,
          nosso queijo é feito para conquistar todos os paladares.
        </p>
        <p className="text-base md:text-lg text-amber-900">
          Venha conhecer e leve para casa o melhor queijo da cidade!
        </p>
        <Button
          className="mt-4 w-fFit px-6 py-3 text-lg"
          onClick={() => navigate("category?category=queijos")}
        >
          Venha conferir
        </Button>
      </div>
    </section>
  );
}
