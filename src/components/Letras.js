import { useState } from "react";

export default function Letras(props){
 
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    
    const {palavra}=props  
const [value,setValue]=useState()

    function test(e){
    
        const elemento =e.target.innerText.toLowerCase();
        setValue(elemento)
        const indices = [];
        let indice = palavra.indexOf(elemento);

while (indice !== -1) {
  indices.push(indice);
  indice = palavra.indexOf(elemento, indice + 1);
//console.log(palavra.includes(elemento))
//console.log(indice)
}

console.log(e.target.innerText);
console.log(indices)
console.log(palavra)
    }

    return(   
<ul>
        {alfabeto.map(letra=>(
    
    <button disabled ={!palavra ? true : false} onClick={test} className= {!palavra? "teclado bloqueado": "teclado liberado" }>{letra.toUpperCase()}  </button>
            
))}
   </ul>
   
    )
}



