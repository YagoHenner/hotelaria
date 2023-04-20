import { Route, Routes } from "react-router-dom";
import HomeFuncionario from "../pages/homefuncionario";
import AuthFuncionario from "./Autenticação/authFuncionario";
import React from "react";

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
    </Routes>
  );
};
