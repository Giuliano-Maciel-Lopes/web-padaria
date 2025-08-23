

export function LoadingFull() {
  return (
    <div className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center z-50 pointer-events-none">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-amber-950 rounded-full animate-spin"></div>
      <p className="mt-4 text-amber-950 font-medium text-lg">Carregando...</p>
    </div>
  );
}
