type Props = {
  img: string;
  img2: string;
  name: string;
};

export function Carrossel({ img, img2, name }: Props) {
  return (
    <div className="w-full h-17 bg-gradient-animated flex flex-col  p-4 my-6">
      <div className="flex items-center  w-full h-full justify-between">
        <img
          src={img2}
          alt={`${name} imagem secundária`}
          className="h-full w-24 rounded object-cover "
        />
        <p className="text-lg text-white font-semibold  ">{name}</p>
        <img
          src={img}
          alt={`${name} imagem principal`}
          className="h-full w-24 rounded object-cover "
        />
      </div>
    </div>
  );
}
