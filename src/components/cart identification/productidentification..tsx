type ProductViewProps = {
  imageUrl: string;
  name: string;
  quantity: number;
  category: string;
};

export function ProductImageCart({ imageUrl, name, quantity, category }: ProductViewProps) {
  return (
   
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="md:w-28 md:h-28 h-60  rounded overflow-hidden">
        <img
          src={encodeURI(imageUrl)}
          alt={name}
          className="w-full h-full object-contain bg-gray-100"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-2xl">{name}</h2>
        <p className="text-lg">
          <span className="text-gray-500">Quantidade: </span>
          {quantity}
        </p>
        <p className="text-lg">{category}</p>
      </div>
      </div>
      
   
  );
}
