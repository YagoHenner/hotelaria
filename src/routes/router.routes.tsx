import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeUsuario from "../pages/hospede/homehospede";
import Login from "../pages/login";
import AuthUsuario from "./Autenticação/authUsuario";
import AuthFuncionario from "./Autenticação/authFuncionario";
import HomeFuncionario from "../pages/funcionario/homefuncionario";

export default function Router() {
  return (
    <BrowserRouter>
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
        {/* <Route path="/quarto/:id" component={
          <AuthUsuario>
          <Quarto />
          </ AuthUsuario>
          } /> */}
        <Route
          path='/funcionario'
          element={
            <AuthFuncionario>
              <HomeFuncionario />
            </AuthFuncionario>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
