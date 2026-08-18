import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MinhaFoto from "../assets/imagem.png";


function Home() {
    return(
       <main>
         <h1 className="text-white text-4xl p-4">Sobre Mim: </h1>
        
          
       <div className="flex flex-row gap-5 justify-center mt-5 border-3 border-red-500 bg-black  h-120 w-150">
        <img src={MinhaFoto} className="flex flex-row gap-5 justify-center mt-5 border-3 border-red-500 bg-black p-2"/>
        <h1 className="text-white flex flex-row gap-2 justify-center mt-5 border-2 border-red-500 bg-black p-2">Olá! Me chamo Marcos, tenho 18 anos e sou estudante de Tecnologia da Informação. Meu grande objetivo profissional é atuar no desenvolvimento de jogos, unindo minha paixão pelos games à programação. Convido você a conhecer meus projetos e acompanhar minha evolução acessando meu perfil no GitHub: MarcosMB1</h1>
         </div>
   
          <Footer></Footer>
       </main>
    );
}

export  default Home;