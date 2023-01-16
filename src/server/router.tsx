import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Entrada/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
