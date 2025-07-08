import { Button } from "../../index/button";

type Props = {
  onConfirm: () => void;
  onCancel: () => void ;
  mensagem:string
};

export function ConfirmLogout({mensagem, onConfirm, onCancel }: Props) {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm md:max-w-md p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-center mb-4">
          {mensagem}
        </h3>

        <div className="flex gap-4 justify-between">
          <Button onClick={onCancel} className="flex-1" colorVariant="secund">
            CANCELAR
          </Button>
          <Button onClick={onConfirm } className="flex-1" colorVariant="primary">
            CONFIRMAR
          </Button>
        </div>
      </div>
    </div>
  );
}
