import { Navigate } from "react-router-dom";
import ContextoState from "../../context/contexto";
import HomePage from "../../pages/homepage";
import React, { useContext } from "react";

export default function Autenticar({ children }: { children: JSX.Element }) {
  const { lembrar } = useContext(ContextoState);

  return lembrar ? (
    <Navigate
      to={{
        pathname: "/",
      }}
    />
  ) : (
    children
  );
}
