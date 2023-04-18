import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeUsuario from "../pages/hospede/homehospede";
import Quarto from "../pages/hospede/quarto";
import Login from "../pages/login";
import AuthUsuario from "./Autenticação/authUsuario";
import AuthFuncionario from "./Autenticação/authFuncionario";
import HomeFuncionario from "../pages/funcionario/homefuncionario";
import { useRef } from "react";
import transitions from "./routerTransitions.module.css";
import Adicionar from "../pages/funcionario/adicionarAlgo";
import { motion, AnimatePresence } from "framer-motion";

const Rotas = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      {/* <motion.div key={location.pathname} className={transitions.fade}> */}
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
          path='/funcionario'
          element={
            <AuthFuncionario>
              <HomeFuncionario />
            </AuthFuncionario>
          }
        />
        <Route
          path='/funcionario/adicionar'
          element={
            <AuthFuncionario>
              <Adicionar />
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
