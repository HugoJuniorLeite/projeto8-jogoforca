import { useState } from "react";


export default function Letras(props) {
    
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [acertos, setAcertos]=useState(0)
    
    const { palavra, underLine, setUnderLine } = props //palavra escolhida do componente jogo
    const [botaoClicado, setBotaoClicado] = useState([])
    let clone =[...underLine]
    
    function clicouTeclado(letra) {
        
        const indices = [];
        const elemento = letra.toLowerCase();
        let acerto=0
       let palavraSeparada= palavra.split("")
        let cont =0        
            let indice = palavra.indexOf(elemento);        
            while (indice !== -1) {
                indices.push(indice);
                indice = palavra.indexOf(elemento, indice + 1);
               cont++
            }
            
           
            acerto = indices.length +acertos
           
            if(acerto === palavraSeparada.length){
                alert("acertou tudo otario")
            }

            for (let i = 0;   i < indices.length; i++) {
                let test = indices[i]    
                clone[test]=elemento
                  
            }

            setAcertos(cont + acertos) 
            setUnderLine(clone)

        if (!botaoClicado.includes(elemento)) {
            setBotaoClicado([...botaoClicado, elemento])
        }
        console.log(cont,"contador")
               console.log(acertos,"acertos")
               console.log(acerto,"acerto")
                console.log(clone,"clone")
            }



        
    return (
        <ul>
            {alfabeto.map(letra => (

                <button disabled={!palavra ? true : false || botaoClicado.includes(letra) ? true : false} onClick={() => clicouTeclado(letra)} 
                className={!palavra || botaoClicado.includes(letra) ? "teclado bloqueado" : "teclado liberado"}>
                    {letra.toUpperCase()}  
                    </button>

            ))}
        </ul>

    )
}



