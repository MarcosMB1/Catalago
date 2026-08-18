import { Link, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import SobreMim from "../pages/SobreMim";

function Footer() {
  return(
    <main>
      <footer className="h-20 min-w-screen bg-red-500 text-white mt-120">
        <Link to={"/Home"} className="hover:underline p-3">
          Home
        </Link>
        <Link to={"/Catalogo"} className="hover:underline p-3">
        Catalogo
        </Link>
        <Link to={"/SobreMim"} className="hover:underline p-3">
        SobreMim
        </Link>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/SobreMim" element={<SobreMim />} />
        </Routes>
      </div>
    </footer>
    </main>
   
    
   

  );
}

export default Footer;