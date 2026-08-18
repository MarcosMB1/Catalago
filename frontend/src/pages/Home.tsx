   import Footer from "../components/Footer";
   import Carditem from "../components/Carditem";
   import Terraria from "../assets/Terraria_Steam_artwork.jpg"
   import MGS5 from "../assets/MGS5_TPP.jpg"
   import Skyrim from "../assets/The_Elder_Scrolls_5_Skyrim_capa.png"
   import DeathStranding from "../assets/MV5BNzNlMjExMDItYmE3MC00Zjk4LWI5MjUtMmUxMjdjMzZiNTc2XkEyXkFqcGc@._V1_.jpg"




   function Home() { 
   return ( 
      <main className="min-h-screen flex flex-col justify-between"> 
         <div className="flex flex-row gap-5 justify-center items-center mt-5 border-4 border-black bg-red-500 text-white "> 
         <h1 className="text-white text-2xl">Bem-Vindo ao Game-World!!!</h1>
          
         </div> 
         <div>
             <h1 className="text-white text-5xl flex flex-row gap-5 justify-center h-100 mt-20 border-3 border-black  bg-black ">Jogos Do Catalago</h1>
         </div>
           <div className="border-1 border-red-500 bg-black">
             <Carditem 
            imagem={Terraria} botao="Ver jogo"
            >    
            </Carditem>
            <Carditem 
            imagem={MGS5}  botao="Ver jogo"
            >    
            </Carditem>
            <Carditem 
            imagem={Skyrim} botao="Ver jogo"
            >    
            </Carditem>
            <Carditem 
            imagem={DeathStranding}  botao="Ver jogo"
            >    
            </Carditem>
           </div>
           
        
               
               

         <Footer /> 
      </main> 
   ); 
   } 

   export default Home;
