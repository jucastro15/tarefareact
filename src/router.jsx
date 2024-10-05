import { BrowserRouter, Routes, Route } from "react-router-dom";
import Canal from "./pages/canal";
import Consultar from "./pages/buscar";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Canal />} />
        <Route path="/buscar" element={<Consultar />} />
       
      </Routes>
    </BrowserRouter>
  );
}