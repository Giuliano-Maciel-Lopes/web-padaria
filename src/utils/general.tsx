
type FormErrorProps = {
  message?: string;
};

export function GeneralErro({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <p className="text-red-600 border border-red-500 rounded p-2 mt-2">
      {message}
    </p>
  );
}
