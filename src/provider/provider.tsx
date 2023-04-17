import React, { useState, useEffect } from "react";
import ContextoState from "../context/contexto";
import { ContextoType } from "../types";

function Provider({ children }: { children: JSX.Element }) {
  const [lembrar, setLembrar] = useState(
    localStorage.getItem("lembrar") === "true"
  );

  // useEffect(() => {
  //   const savedValue = JSON.parse(localStorage.getItem("lembrar") as string);
  //   if (savedValue !== null) {
  //     setLembrar(savedValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("lembrar", JSON.stringify(lembrar));
  // }, [lembrar]);

  const ativarLembrar = () => {
    console.log(lembrar);

    setLembrar(!lembrar);
    localStorage.setItem("lembrar", String(!lembrar));
  };

  return (
    <ContextoState.Provider value={{ lembrar, ativarLembrar }}>
      {children}
    </ContextoState.Provider>
  );
}

export default Provider;
