export function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-300 border-t-blue-500 rounded-full  "></div>
      <p className="text-gray-500 text-lg sm:text-xl">Carregando...</p>
    </div>
  );
}
