import { useState } from "react";
import ContextoState from "../context/contexto";
import { ChildrenProp } from "../../globals/interfaces/interfaces";
import determinarUsuario from "../../globals/utils/determinarUsuario";
import { User } from "../../globals/types";

export default function Provider({ children }: ChildrenProp) {
  const [tipo, setTipo] = useState(Number(localStorage.getItem("tipo")));
  const usuario = localStorage.getItem("user");
  const [user, setUser] = useState<User>(usuario ? JSON.parse(usuario) : null);
  const ativarTipo = (value: number) => {
    setTipo(value);
    localStorage.setItem("tipo", String(value));
  };

  const handleUserChange = (value: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    console.log("User:" + localStorage.getItem("user"));
  };

  const handleTipoChange = (value: number) => {
    setTipo(value);
    localStorage.setItem("tipo", String(value));
  };

  const logOut = () => {
    setTipo(9458934);
    localStorage.setItem("tipo", String(9458934));
  };

  function signIn(email: string, senha: string) {
    const res = determinarUsuario(email, senha);
    if (res) {
      handleUserChange(res.user);
      setTipo(res.tipo);
      localStorage.setItem("tipo", String(res.tipo));
      console.log("Tipo:" + localStorage.getItem("tipo"));
    } else {
      return "Erro";
    }
  }

  return (
    <ContextoState.Provider value={{ user, tipo, signIn, logOut }}>
      {children}
    </ContextoState.Provider>
  );
}
