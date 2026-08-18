   import Footer from "../components/Footer";
 



   function Home() { 
   return ( 
      <main className="min-h-screen flex flex-col justify-between"> 
         <div className="flex flex-row gap-5 justify-center items-center mt-5 border-4 border-black bg-red-500 text-white "> 
         <h1 className="text-white text-2xl">Bem-Vindo ao Game-World!!!</h1>
         </div> 
         <div>
            <h1 className="text-white text-2xl flex flex-row gap-5 justify-center items-center mt-5 border-4 border-black bg-red-500">Está Página é Dedicada A Vários Gamers Do Mundo</h1>
         </div>
         
        
               
               

         <Footer /> 
      </main> 
   ); 
   } 

   export default Home;
