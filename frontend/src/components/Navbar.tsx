import { Link } from "react-router";

function App() {
  return (
    <main className="min-h-screen bg-black flex flex-col justify-end">
      <div>
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
      </div>
    </main>
  );
}
