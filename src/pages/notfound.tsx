import { useNavigate } from "react-router";
import { Button } from "../components/index/button";
import fundo from "../assets/notfound.jpg";

export function Notfound() {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-center text-white p-4"
      style={{ backgroundImage: `url(${fundo})` }}  // aqui
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-lg">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">404</h1>
        <p className="mt-4 text-2xl font-semibold drop-shadow-md">
          Você chegou no fim das terras mineiras
        </p>
        <p className="mt-2 text-lg text-gray-200 drop-shadow-sm">
          A página que você procura não existe.
        </p>

        <Button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg shadow-lg"
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
