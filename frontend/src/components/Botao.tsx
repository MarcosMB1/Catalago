type BotaoProps = { 
  referencia: string; 
}; 

function Botao({ referencia }: BotaoProps) { 
  return ( 
    <a 
      href={referencia} 
      className="inline-flex items-center justify-center bg-black text-white h-15 w-18 border border-red-500 rounded-lg mt-50"
    >
      Ver Jogo
    </a>
  ); 
} 

export default Botao;
