//import { useState } from "react";


export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   // const [acertos, setAcertos] = useState(0);
    const { palavraSelecionada,setPalavraSelecionada,
         underLine, setUnderLine, acertos, setAcertos,
         erros, setErros, botaoClicado, setBotaoClicado,
         vitoria, setVitoria, gameOver, setGameOver } = props; //palavra escolhida do componente jogo
 //   const [botaoClicado, setBotaoClicado] = useState([]);
    let clone = [...underLine];

    function clicouTeclado(letra) {

        const indices = [];
        const elemento = letra.toLowerCase();
        let acerto = 0;
        let palavraSeparada = palavraSelecionada.split("");
        let cont = 0;
        let contErro=0;
        let indice = palavraSelecionada.indexOf(elemento);

        if(indice === -1){
            contErro =contErro +1
        }
        setErros(contErro+erros)
        


        while (indice !== -1) {
            indices.push(indice);
            indice = palavraSelecionada.indexOf(elemento, indice + 1);
            cont++;
            
        }


        console.log(contErro,"conterro")
        console.log(erros,"erros")
        


        acerto = indices.length + acertos;



        for (let i = 0; i < indices.length; i++) {
            let test = indices[i];
            clone[test] = elemento;
        }

        setAcertos(cont + acertos);
        setUnderLine(clone);

        if (!botaoClicado.includes(elemento)) {
            setBotaoClicado([...botaoClicado, elemento]);
        }

        for(let i=0; i< palavraSeparada.length; i++){
        if (elemento === palavraSeparada[i]) {
        }
  
   if( underLine.length ===acerto){

    setPalavraSelecionada("")
    setBotaoClicado("")
    setAcertos(0)
    setVitoria(true)

   }

   if( erros > 4){

   // setPalavraSelecionada("")
   // setBotaoClicado("")
   // setAcertos(0)
    setUnderLine(palavraSeparada)
    setGameOver(true)

}

    }

        console.log(cont, "contador");
        console.log(acertos, "acertos");
        console.log(acerto, "acerto");
        console.log(clone, "clone");
    }

    return (
        <ul>
            {alfabeto.map(letra => (
                <button disabled={!palavraSelecionada ? true : false || botaoClicado.includes(letra) ? true : false}
                    onClick={() => clicouTeclado(letra)}
                    className={!palavraSelecionada || botaoClicado.includes(letra) ? "teclado bloqueado" : "teclado liberado"}>
                    {letra.toUpperCase()}
                </button>
            ))}
        </ul>
    )
}