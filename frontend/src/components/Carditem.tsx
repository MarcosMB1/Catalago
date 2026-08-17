type props ={
    imagem: string
    botao: string
}

import Botao from "../components/Botao"



function Card( { imagem,  botao } :props){
    return(
      <div className="">
        <img src={`${imagem}`} alt="" className="h-50 w-50 "/>
       <Botao></Botao>
      </div>
    );
}

export default Card