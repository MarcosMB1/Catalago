import { Link, Routes, Route } from "react-router";

import './App.css'
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import SobreMim from "./pages/SobreMim";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {
  return (
    <main>
      <Navbar></Navbar>
    <Footer></Footer>
    </main>
  );
}


export default App
