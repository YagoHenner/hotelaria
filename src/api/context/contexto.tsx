import React, { useContext } from "react";
import { ContextoType } from "../../globals/types";

const ContextoState = React.createContext<ContextoType>({
  user: null,
  signIn: (email: string, senha: string) => {},
  tipo: 9458934,
  logOut: () => {},
});

function contexto(): ContextoType {
  const context = useContext(ContextoState);

  if (!context) {
    throw new Error("Algo deu errado");
  }

  return context;
}

export { ContextoState, contexto };
