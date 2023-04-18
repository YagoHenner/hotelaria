import React, { useState, useEffect } from "react";
import ContextoState from "../context/contexto";
import { ContextoType } from "../types";

export default function Provider({ children }: { children: JSX.Element }) {
  const [tipo, setTipo] = useState(Number(localStorage.getItem("tipo")));

  // useEffect(() => {
  //   const savedValue = JSON.parse(localStorage.getItem("tipo") as string);
  //   if (savedValue !== null) {
  //     setTipo(savedValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tipo", JSON.stringify(tipo));
  // }, [tipo]);

  const ativarTipo = (value: number) => {
    setTipo(value);
    console.log(tipo);
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
