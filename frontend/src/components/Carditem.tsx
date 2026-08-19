  import Botao from "../components/Botao";

  type CardProps = {
    imagem: string;
    botao: string; 
    texto: string;
  };

  function Card({ imagem, botao, texto }: CardProps) {
    return (
      <div className="flex w-80 max-w-full flex-col justify-between border-2 border-red-500 bg-black p-5 rounded-lg shadow-lg">
        <div className="h-48 w-full rounded-md">
          <img 
            src={imagem} 
            alt="Imagem do card" 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="mt-4 flex flex-grow flex-col justify-between gap-4">
          <p className="break-words leading-relaxed text-gray-300">
            {texto}
          </p>
          <div className="mt-auto pt-2">
          <Botao referencia="https://store.steampowered.com/app/105600/Terraria/"></Botao>
          </div>
        </div>
      </div>
    );
  }

  export default Card;
