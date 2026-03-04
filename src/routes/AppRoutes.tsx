import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProjetoDetalhe from "../pages/ProjetoDetalhe";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projeto/:id" element={<ProjetoDetalhe />}/>
            </Routes>
        </BrowserRouter>
    );
}