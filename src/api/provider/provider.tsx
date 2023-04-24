import { useEffect, useMemo, useState } from "react";
import { ContextoState, contexto } from "../context/contexto";
import { ChildrenProp } from "../../globals/interfaces/interfaces";
import determinarUsuario from "../../globals/utils/determinarUsuario";
import { User } from "../../globals/types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import api from "../axios/api";

export default function Provider({ children }: ChildrenProp) {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [tipo, setTipo] = useLocalStorage<number>("tipo", 9458934);

  const logOut = () => {
    setUser(null);
    setTipo(9458934);
  };

  // useEffect(() => {
  //   console.log("User: " + user?.nome);
  //   console.log("Tipo " + tipo);
  // }, [user, tipo]);

  const signIn = async (email: string, senha: string) => {
    const res = await api.post("/auth/login", {
      email: email,
      password: senha,
    });
    setUser(res.data.usuario);
    setTipo(res.data.usuario.type);
  };

  const value = useMemo(
    () => ({
      user,
      tipo,
      signIn,
      logOut,
    }),
    [user, tipo, signIn, logOut]
  );

  return (
    <ContextoState.Provider value={value}>{children}</ContextoState.Provider>
  );
}
