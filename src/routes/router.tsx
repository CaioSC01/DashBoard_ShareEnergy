import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/Theme/Navbar/Index";
import { Home } from "../pages/Entrada/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar children={undefined} />} />
      </Routes>
    </BrowserRouter>
  );
};
