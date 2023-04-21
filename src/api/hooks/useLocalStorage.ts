import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, valorInicial: T): [T, (valor: T) => void] {
  const [valorArmazenado, setValorArmazenado] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : valorInicial;
    } catch (error) {
      console.error(error);
      return valorInicial;
    }
  });

  const setValor = (valor: T) => {
    try {
      const valorArmazenar = JSON.stringify(valor);
      localStorage.setItem(key, valorArmazenar);
      setValorArmazenado(valor);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValorArmazenado(JSON.parse(item));
    }
  }, [key]);

  return [valorArmazenado, setValor];
}

export { useLocalStorage };
