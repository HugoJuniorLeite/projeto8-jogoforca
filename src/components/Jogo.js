import { useState } from "react"
import Letras from "./Letras"
import palavras from "./palava"

export default function Jogo(){

const rand = Math.random()*palavras.length |0;
const [palavraSelecionada, setPalavraSelecionada]=useState("")



function escolherPalavra(){

        setPalavraSelecionada(palavras[rand])

  //      const palavraSelecionada = palavras[rand];
        
    //    const resultado = palavraSelecionada.split("")
      //  console.log(resultado)
        
     //   const elemento = 'a';
       // const indices = [];
      //  let idx = palavraSelecionada.indexOf(elemento);

//while (idx !== -1) {
  //indices.push(idx);
 // idx = palavraSelecionada.indexOf(elemento, idx + 1);

 console.log(palavraSelecionada)

}

//console.log(indices); 

    //}


 
    return(

        <>  
        <div className="corpo">
        <img src="./assets/forca0.png" alt="desejo da forca"/>
        <button onClick={escolherPalavra} className="star">Escolher Palavra</button>
        </div>
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