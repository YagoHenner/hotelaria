import { Navigate } from "react-router-dom";
import { ContextoState, contexto } from "../../../api/context/contexto";
import React, { useContext } from "react";
import { ChildrenProp } from "../../../globals/interfaces/interfaces";

export default function AuthFuncionario({ children }: ChildrenProp) {
  const { tipo } = contexto();

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
