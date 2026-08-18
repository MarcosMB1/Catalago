type props ={
    imagem: string
    botao: string
}

import Botao from "../components/Botao"



function Card( { imagem,  botao } :props){
    return(
      <div className="border-3 border-red-500 bg-black">
        <img src={`${imagem}`} alt="" className="h-100 w-80 "/>
        <div className="flex flex-row gap-5 justify-center">
        <Botao></Botao>
        </div>
       
      </div>
    );
}

export default Card