import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
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
              <HomePage />
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
