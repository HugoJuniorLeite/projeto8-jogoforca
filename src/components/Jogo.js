import { useState } from "react"
import Letras from "./Letras"
import palavras from "./palava"

export default function Jogo(props) {

    const rand = Math.random() * palavras.length | 0;
    const [palavraSelecionada, setPalavraSelecionada] = useState("")
    const [underLine, setUnderLine] = useState([])
    const testeLetra = []
   
    function escolherPalavra() {


        const palavra = palavras[rand]
        setPalavraSelecionada(palavra)

        const resultado = palavra.split("")
        for (let i = 0; i < resultado.length; i++) {
            testeLetra.push("_")
            setUnderLine(testeLetra)

        }
        // console.log(testeLetra)
        // console.log(underLine)
        console.log(palavra)

    }

    return (

        <>
            <div className="corpo">
                <img src="./assets/forca0.png" alt="desejo da forca" />
                <button onClick={escolherPalavra} className="star">Escolher Palavra</button>
            </div>

            <div className="teste">
                {underLine.map(e => (

                    <span className="underline">{e}</span>

                ))}

            </div>
            <Letras palavra={palavraSelecionada} underLine={underLine} setUnderLine={setUnderLine}    />
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