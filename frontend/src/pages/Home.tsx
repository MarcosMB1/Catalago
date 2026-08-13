import image from"../assets/controle.webp";


function Home() {
  return (
    <main>
  <div>
     <h1 className="text-5xl font-bold text-white bg-black  mt-2" >Bem-Vindo À Game-WORLD</h1>
    <p className="text-2xl text-white bg-black mt-2 " >Uma Página Dedicada Aos Fãs De Jogos E Todos Que Desejam Explorar O Universo Gamer</p>
  </div>
  <div className="p-5">
    <img src={image} alt="" />
  </div>
  <div >
 
  </div>
 </main>
  
  
  );
}

export default Home;


