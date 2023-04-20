import { Navigate } from "react-router-dom";
import ContextoState from "../../../api/context/contexto";
import React, { useContext } from "react";
import { ChildrenProp } from "../../../globals/interfaces/interfaces";

export default function AuthHospede({ children }: ChildrenProp) {
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
