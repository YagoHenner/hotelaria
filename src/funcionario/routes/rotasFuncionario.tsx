import { Route, Routes } from "react-router-dom";
import HomeFuncionario from "../pages/homefuncionario";
import AuthFuncionario from "./Autenticação/authFuncionario";
import Solicitacoes from "../pages/solicitacoes";
import Ocupações from "../pages/ocupações";
import GerenciarQuarto from "../pages/gerenciarQuarto";

export const RotasFuncionario = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthFuncionario>
            <HomeFuncionario />
          </AuthFuncionario>
        }
      />
      <Route
        path='/solicitacoes'
        element={
          <AuthFuncionario>
            <Solicitacoes />
          </AuthFuncionario>
        }
      />
      <Route
        path='/ocupacoes'
        element={
          <AuthFuncionario>
            <Ocupações />
          </AuthFuncionario>
        }
      />
            <Route
        path='/ocupacoes/:id'
        element={
          <AuthFuncionario>
            <GerenciarQuarto />
          </AuthFuncionario>
        }
      />
    </Routes>
  );
};
