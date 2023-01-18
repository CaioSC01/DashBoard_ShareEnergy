import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/Theme/Navbar/Index";
import { Home } from "../pages/Entrada/Home";
import { ListaUsuarios } from "../pages/Pagina inicial/ListaUsuarios";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar children={undefined} />} />
        <Route path="/listausuario" element={<ListaUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
};
