import React from "react";
import { ContextoType } from "../../globals/types";

const ContextoState = React.createContext<ContextoType>({
  user: null,
  signIn: (email: string, senha: string) => {},
  tipo: 9458934,
  logOut: () => {},
});

export default ContextoState;
