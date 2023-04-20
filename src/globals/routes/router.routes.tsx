import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import { RotasFuncionario } from "../../funcionario/routes/rotasFuncionario";
import { AnimatePresence } from "framer-motion";
import { RotasHospede } from "../../hospede/routes/rotasHospede";

const Rotas = () => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<RotasHospede />} />
        <Route path='/funcionario/*' element={<RotasFuncionario />} />
      </Routes>
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
