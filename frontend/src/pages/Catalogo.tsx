import Carditem from "../components/Carditem"
import Terraria from "../assets/Terraria_Steam_artwork.jpg"
import MGS5 from "../assets/MGS5_TPP.jpg"
import Skyrim from "../assets/The_Elder_Scrolls_5_Skyrim_capa.png"
import DeathStranding from "../assets/MV5BNzNlMjExMDItYmE3MC00Zjk4LWI5MjUtMmUxMjdjMzZiNTc2XkEyXkFqcGc@._V1_.jpg"
import Footer from "../components/Footer"


function Catalago() {
    return(
       <main>
        <h1 className="text-5xl text-white">Catálago:</h1>
        <div className="flex flex-row gap-5 justify-center mt-40 ">
             <Carditem 
            imagem={Terraria} botao="Ver jogo" texto="Terraria é um jogo de aventura, sobrevivência e construção em um mundo aberto 2D, mas com muito mais foco em ação e combate."
            >    
            </Carditem>
            <Carditem 
            imagem={MGS5}  botao="Ver jogo" texto="Metal Gear Solid V foca na vingança de Venom Snake em 1984. Ele reconstrói seu exército privado (Diamond Dogs) em um mundo aberto de espionagem tática com liberdade total de ação. O jogo é considerado uma obra-prima de jogabilidade, mas tem uma história incompleta devido à demissão do criador Hideo Kojima pela Konami."
            >    
            </Carditem>
            <Carditem 
            imagem={Skyrim} botao="Ver jogo" texto=" The Elder Scrolls V: Skyrim é um RPG onde você controla o Dragonborn, um herói com a alma de um dragão."
            >    
            </Carditem>
            <Carditem 
            imagem={DeathStranding}  botao="Ver jogo" texto=" Death Stranding é um jogo de ação e ficção científica criado por Hideo Kojima, onde o objetivo principal é reconstruir um mundo isolado fazendo entregas e conectando pessoas."
            >    
            </Carditem>
        </div>
       
        <Footer></Footer>
      
       </main>
    )
}

export  default Catalago;