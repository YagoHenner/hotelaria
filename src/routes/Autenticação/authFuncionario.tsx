import { Navigate } from "react-router-dom";
import ContextoState from "../../context/contexto";
import React, { useContext } from "react";

export default function AuthFuncionario({
  children,
}: {
  children: JSX.Element;
}) {
  const { tipo } = useContext(ContextoState);

  return tipo != 0 ? (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  ) : (
    children
  );
}
