import { Link, Routes, Route } from "react-router";

import './App.css'
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import SobreMim from "./pages/SobreMim";






function App() {
  return (
    <main className="min-h-screen bg-slate-300">
      <nav className="flex gap-6 bg-black p-4 text-white">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/sobremim">SobreMim</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
      </div>
    </main>
  );
}


export default App
