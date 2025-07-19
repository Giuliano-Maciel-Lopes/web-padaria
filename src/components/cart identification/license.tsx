import { Button } from "../index/button";

type Props = {
  name?: string;
  email?: string;
  addressRegistered?: string;
  auth?: boolean;
  onLoginClick?: () => void;
};

export function License({ name, email, addressRegistered, auth, onLoginClick }: Props) {
  return (
    <div className="w-full md:w-[25rem] bg-green-100 h-44 border-2 border-green-400 rounded-2xl p-6 flex flex-col justify-between shadow-md items-center justify-center">
      <h3 className="text-xl font-bold text-green-800 mb-4">UAI License</h3>

      {!auth ? (
        <Button
          onClick={onLoginClick}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Faça login
        </Button>
      ) : (
        <>
          <div className="flex justify-between text-green-700 w-full mb-2">
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
            <div className="text-green-700 w-full">
              <p className="font-semibold">Registered Address:</p>
              <p>{addressRegistered}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
