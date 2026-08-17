import Carditem from "../components/Carditem"
import Terraria from "../assets/Terraria_Steam_artwork.jpg"
import MGS5 from "../assets/MGS5_TPP.jpg"
import Skyrim from "../assets/The_Elder_Scrolls_5_Skyrim_capa.png"
import DeathStranding from "../assets/MV5BNzNlMjExMDItYmE3MC00Zjk4LWI5MjUtMmUxMjdjMzZiNTc2XkEyXkFqcGc@._V1_.jpg"
import Footer from "../components/Footer"


function Catalago() {
    return(
       <main>
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
        <Footer></Footer>
      
       </main>
    )
}

export  default Catalago;