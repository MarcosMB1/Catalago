import image2 from "../assets/Terraria_Steam_artwork.jpg"
import image3 from "../assets/The_Elder_Scrolls_5_Skyrim_capa.png"
import image4 from "../assets/MGS5_TPP.jpg"
import image5 from "../assets/MV5BNzNlMjExMDItYmE3MC00Zjk4LWI5MjUtMmUxMjdjMzZiNTc2XkEyXkFqcGc@._V1_.jpg"

function Catalogo() {
  return (
    <main className="p-6">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-white">Catalogo De jogos</h1>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <div className="w-80 text-white">
          <img src={image2} alt="Terraria" className="w-full h-auto rounded" />
          <p>Terraria É Um Jogo Muito Bom</p> 
        </div>
        <div className="w-80 text-white">
          <img src={image3} alt="Skyrim" className="w-full h-auto rounded" />
          <p> Skyrim É Um Jogo Muito Bom</p>
        </div>
        <div className="w-80 text-white">
          <img src={image4} alt="MGS5" className="w-full h-auto rounded " />
          <p> Metal Gear Solid 5 The Phantom Pain É Um Jogo Muito Bom</p>
        </div>
        <div className="w-80 text-white">
          <img src={image5} alt="Jogo 4" className="w-full h-auto rounded" />
          <p>É Um Jogo Muito Bom</p>
        </div>
      </div>
      <footer className="mt-100 bg-white h-40 w-auto">
        

      </footer>
    </main>
  );
}

export default Catalogo;
