import { Button } from "../index/button";
import Sweets from "../../assets/socinhos.jpg";
import Savories from "../../assets/salgados.jpg";
import { useNavigate } from "react-router";

export function SweetsAndSavories() {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 bg-amber-50">
      <h1 className="text-xl md:text-3xl font-extrabold text-amber-700 text-center mb-12">
        E você é doce ou salgado?
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-0">
        
        {/* Doces */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={Sweets}
            alt="Doces"
            className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <Button
            className="px-6 py-3 text-lg"
            onClick={() => navigate("/category?category=doces")}
          >
            Confira
          </Button>
        </div>

        {/* Salgados */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={Savories}
            alt="Salgados"
            className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <Button
            className="px-6 py-3 text-lg"
            onClick={() => navigate("/category?category=salgados")}
          >
            Confira
          </Button>
        </div>

      </div>
    </section>
  );
}
