import { useEffect, useState } from "react";

export function useDebaunce<T>(value: T, delay: number): T {
  const [debaunce, setDebaunce] = useState(value);

  useEffect(() => {
    const retainValue = setTimeout(() => {
      setDebaunce(value);
    }, delay);
    return () => {
      clearTimeout(retainValue);
    };
  }, [value, delay]);

  return debaunce;
}
