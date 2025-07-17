type Props = {
  name: string;
  email: string;
  addressRegistered?: string;
};

export function License({ name, email, addressRegistered }: Props) {
  return (
    <div className="w-full md:w-[25rem] bg-green-100 h-44 border-2 border-green-400 rounded-2xl p-6 flex flex-col justify-between shadow-md">
      <h3 className="text-xl font-bold text-green-800 mb-4">UAI License</h3>
      
      <div className="flex justify-between text-green-700 mb-2">
        <div>
          <p className="font-semibold">Name:</p>
          <p>{name}</p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p>{email}</p>
        </div>
      </div>

      {addressRegistered && (
        <div className="text-green-700">
          <p>{addressRegistered}</p>
        </div>
      )}
    </div>
  );
}
