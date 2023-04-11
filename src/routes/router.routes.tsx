import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import Login from "../pages/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
