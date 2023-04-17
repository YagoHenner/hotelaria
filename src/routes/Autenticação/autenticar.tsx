import { Navigate } from "react-router-dom";
import ContextoState from "../../context/contexto";
import Login from "../../pages/login";
import React, { useContext } from "react";

export default function Autenticar({ children }: { children: JSX.Element }) {
  const { lembrar } = useContext(ContextoState);

  return !lembrar ? (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  ) : (
    children
  );
}
