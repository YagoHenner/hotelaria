import { Route, Routes } from "react-router-dom";
import Quarto from "../pages/quarto";
import SolicitarReserva from "../pages/solicitarReserva";
import AuthHospede from "./Autenticação/authHospede";
import HomeHospede from "../pages/homehospede";
import React from "react";

export const RotasHospede = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthHospede>
            <HomeHospede />
          </AuthHospede>
        }
      />
      <Route
        path='/quarto/:id'
        element={
          <AuthHospede>
            <Quarto />
          </AuthHospede>
        }
      />
      <Route
        path='/quarto/:id/solicitar-reserva'
        element={
          <AuthHospede>
            <SolicitarReserva />
          </AuthHospede>
        }
      />
    </Routes>
  );
};
