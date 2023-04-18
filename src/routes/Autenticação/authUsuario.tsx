import { Navigate } from "react-router-dom";
import ContextoState from "../../context/contexto";
import React, { useContext } from "react";

export default function AuthUsuario({ children }: { children: JSX.Element }) {
  const { tipo } = useContext(ContextoState);

  return tipo != 1 ? (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  ) : (
    children
  );
}
