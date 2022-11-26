import { useState } from "react";

export default function Letras(props){
 
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    
    const {palavra}=props  
const [botaoClicado,setBotaoClicado]=useState([])

function test(letra){
    
    const indices = [];
    const elemento =letra.toLowerCase();
    
    if(!botaoClicado.includes(elemento)){
        setBotaoClicado([...botaoClicado,elemento])
    


        let indice = palavra.indexOf(elemento);

while (indice !== -1) {
  indices.push(indice);
  indice = palavra.indexOf(elemento, indice + 1);
//console.log(palavra.includes(elemento))
//console.log(indice)

    }


//console.log(e.target.innerText);
console.log(indices)
console.log(palavra)
    }
}

    return(   
<ul>
        {alfabeto.map(letra=>(
    
    <button disabled ={!palavra ? true : false || botaoClicado.includes(letra)? true : false } onClick={()=>test(letra)} className={!palavra || botaoClicado.includes(letra) ?"teclado bloqueado": "teclado liberado"}/*{`${botaoClicado.includes(letra) && "selecionado"} ${!palavra? "teclado bloqueado": "teclado liberado"}`}*/ >{letra.toUpperCase()}  </button>
            
))}
   </ul>
   
    )
}



