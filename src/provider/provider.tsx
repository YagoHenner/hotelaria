import React, { useState, useEffect } from "react";
import ContextoState from "../context/contexto";
import { ContextoType } from "../types";

interface ProviderProps {
  children: JSX.Element;
}

export default function Provider({ children }: ProviderProps) {
  const [tipo, setTipo] = useState(Number(localStorage.getItem("tipo")));
  const ativarTipo = (value: number) => {
    setTipo(value);
    localStorage.setItem("tipo", String(value));
  };

  const logOut = () => {
    setTipo(9458934);
    localStorage.setItem("tipo", String(9458934));
  };

  return (
    <ContextoState.Provider value={{ tipo, ativarTipo, logOut }}>
      {children}
    </ContextoState.Provider>
  );
}
