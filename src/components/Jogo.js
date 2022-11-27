import { useState } from "react"
import Letras from "./Letras"
import palavras from "./palava"

export default function Jogo(props) {

    const rand = Math.random() * palavras.length | 0;
    
    const [palavraSelecionada, setPalavraSelecionada] = useState("")
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros]= useState(0)
    const [botaoClicado, setBotaoClicado] = useState([]);
    const [underLine, setUnderLine] = useState([])
    const [vitoria, setVitoria] =useState(false)
    const [gameOver, setGameOver]=useState(false)
    const testeLetra = []
   
    function escolherPalavra() {

    setBotaoClicado("")
    setAcertos(0)
    setErros(0)
    setVitoria(false)
    setGameOver(false)

        const palavra = palavras[rand]
        setPalavraSelecionada(palavra)

        const resultado = palavra.split("")
        for (let i = 0; i < resultado.length; i++) {
            testeLetra.push("_")
            setUnderLine(testeLetra)
        }
        console.log(palavra)

        

    }

    return (

        <>
            <div className="corpo">
                <img src={`./assets/forca${erros}.png`} alt="desejo da forca" />
                <button onClick={escolherPalavra} className="star">Escolher Palavra</button>
            </div>

            <div className={gameOver===false? "teste" : "teste perdeu" } >
                {underLine.map(e => (

                    <span className={vitoria===false? "underline" : "underline ganhou"}>{e}</span>

                ))}

            </div>
            <Letras palavraSelecionada={palavraSelecionada} setPalavraSelecionada={setPalavraSelecionada} 
            underLine={underLine} setUnderLine={setUnderLine}
            acertos={acertos} setAcertos={setAcertos}
            erros={erros} setErros={setErros}
            botaoClicado={botaoClicado} setBotaoClicado={setBotaoClicado}
            vitoria={vitoria} setVitoria={setVitoria}
            gameOver={gameOver} setGameOver={setGameOver}
                />
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