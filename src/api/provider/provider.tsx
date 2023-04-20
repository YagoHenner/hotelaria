import { useEffect, useMemo, useState } from "react";
import { ContextoState, contexto } from "../context/contexto";
import { ChildrenProp } from "../../globals/interfaces/interfaces";
import determinarUsuario from "../../globals/utils/determinarUsuario";
import { User } from "../../globals/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Provider({ children }: ChildrenProp) {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [tipo, setTipo] = useLocalStorage<number>("tipo", 9458934);

  const logOut = () => {
    setUser(null);
    setTipo(9458934);
  };

  useEffect(() => {
    console.log("User: " + user?.nome);
    console.log("Tipo " + tipo);
  }, [user, tipo]);

  const signIn = (email: string, senha: string) => {
    const res = determinarUsuario(email, senha);
    if (res) {
      setUser(res.user);
      setTipo(res.tipo);
    }
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
