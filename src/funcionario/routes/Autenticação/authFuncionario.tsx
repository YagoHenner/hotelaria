import { Navigate } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";
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
