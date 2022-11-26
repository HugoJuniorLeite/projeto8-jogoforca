import { useState } from "react"
import Letras from "./Letras"
import palavras from "./palava"

export default function Jogo(){

const rand = Math.random()*palavras.length |0;
const [palavraSelecionada, setPalavraSelecionada]=useState("")
const [underLine, setUnderLine]=useState([])


function escolherPalavra(){


    const palavra = palavras[rand]
        setPalavraSelecionada(palavra)

const resultado =palavra.split("")
  //      const palavraSelecionada = palavras[rand];
        
  setUnderLine([...resultado,"_"])

        console.log(resultado)
       // console.log(trocado)
        
    }


 
    return(

        <>  
        <div className="corpo">
        <img src="./assets/forca0.png" alt="desejo da forca"/>
        <button onClick={escolherPalavra} className="star">Escolher Palavra</button>
        </div>

        {underLine.map(e=>(
            <div>{"_"}</div>
        ))}

       
        <Letras palavra={palavraSelecionada}/>
        <span className="chutar-resposta">
        <strong>Já Sei a resposta!</strong>
        <form action="">
            <input></input>
            <input type="submit" value="Chutar"></input>
        </form>
        </span>
        </>
    )

}