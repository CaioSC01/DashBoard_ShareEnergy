import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/Theme/Navbar/Index";
import { Home } from "../pages/Entrada/Home";
import { ListaUsuarios } from "../pages/Pagina inicial/ListaUsuarios";
import { Status } from "../pages/Segunda Pagina/Status";
import { Random } from "../pages/Terceira Pagina/Random";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar children={undefined} />} />
        <Route path="/listausuario" element={<ListaUsuarios />} />
				<Route path="/status" element={<Status />} />
				<Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
};
