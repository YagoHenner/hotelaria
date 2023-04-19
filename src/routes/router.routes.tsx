import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeUsuario from "../pages/hospede/homehospede";
import Quarto from "../pages/hospede/quarto";
import Login from "../pages/login";
import AuthUsuario from "./Autenticação/authUsuario";
import AuthFuncionario from "./Autenticação/authFuncionario";
import HomeFuncionario from "../pages/funcionario/homefuncionario";
import SolicitarReserva from "../pages/hospede/solicitarReserva";
import { AnimatePresence } from "framer-motion";

const Rotas = () => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route
          path='/'
          element={
            <AuthUsuario>
              <HomeUsuario />
            </AuthUsuario>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route
          path='/quarto/:id'
          element={
            <AuthUsuario>
              <Quarto />
            </AuthUsuario>
          }
        />
        <Route
          path='/quarto/:id/solicitar-reserva'
          element={
            <AuthUsuario>
              <SolicitarReserva />
            </AuthUsuario>
          }
        />
        <Route
          path='/funcionario'
          element={
            <AuthFuncionario>
              <HomeFuncionario />
            </AuthFuncionario>
          }
        />
      </Routes>
      {/* </motion.div> */}
    </AnimatePresence>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
};

export default Router;
