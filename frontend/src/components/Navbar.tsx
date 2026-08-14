import { Link, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import SobreMim from "../pages/SobreMim";




function Navbar() {
  return (
    <main className="min-h-screen bg-black">
      <nav className="flex gap-6 bg-red-600 p-4 text-white">
        <Link to={"/Home"} className="hover:underline">
          Home
        </Link>
        <Link to={"/Catalogo"} className="hover:underline">
        Catalogo
        </Link>
        <Link to={"/SobreMim"} className="hover:underline">
        SobreMim
        </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/SobreMim" element={<SobreMim />} />
        </Routes>
      </div>
    </main>
  );
}
export default Navbar