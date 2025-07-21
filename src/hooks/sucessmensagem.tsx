import { useEffect, useState } from "react";

export function useSuccessMessage(timeout = 2000) {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => setSuccessMessage(null), timeout);
    return () => clearTimeout(timer);
  }, [successMessage, timeout]);

  return { successMessage, setSuccessMessage };
}
