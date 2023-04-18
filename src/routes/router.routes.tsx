import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeUsuario from "../pages/hospede/homehospede";
import Login from "../pages/login";
import Autenticar from "./Autenticação/autenticar";
import CasoLogin from "./Autenticação/casoLogin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Autenticar>
              <HomeUsuario />
            </Autenticar>
          }
        />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/quarto/:id" component={
          <Autenticar>
          <Quarto />
          </ Autenticar>
          } /> */}
      </Routes>
    </BrowserRouter>
  );
}
