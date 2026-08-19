    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import MinhaFoto from "../assets/imagem.png";

    function Home() {
      return (
        <main className="min-h-screen bg-gray-900 p-6 flex flex-col justify-between">
          <div className="max-w-4xl mx-auto my-auto">
            <h1 className="text-white text-4xl font-bold mb-6">Sobre Mim:</h1>
            <div className="flex flex-col flex-row items-center gap-8 bg-black p-6 rounded-lg border-2 border-red-500 w-200 h-200">
              <img 
                src={MinhaFoto} 
                alt="Foto de Marcos" 
                className="w-100 h-100  border-2 border-red-500" />

              <div className="flex flex-col flex-row items-center gap-8 bg-black p-6 rounded-lg border-2 border-red-500">
              <p className="text-white   text-center ">
                Olá! Me chamo Marcos, tenho 18 anos e sou estudante de Tecnologia da Informação. 
                Meu grande objetivo profissional é atuar no desenvolvimento de jogos, unindo minha 
                paixão pelos games à programação. Convido você a conhecer meus projetos e acompanhar 
                minha evolução acessando meu perfil no GitHub: 
              <p>Marcos MB1</p>
              </p>
              </div>
              
            </div>
          </div>

          <Footer />
        </main>
      );
    }

    export default Home;
