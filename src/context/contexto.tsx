import React from "react";
import { ContextoType } from "../types";

const ContextoState = React.createContext<ContextoType>({
  tipo: 9458934,
  ativarTipo: (value: number) => {},
  logOut: () => {},
});

export default ContextoState;
