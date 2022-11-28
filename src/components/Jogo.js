import Letras from "./Letras"
import palavras from "./palava"
import Chute from "./Chute";

export default function Jogo(props) {

    const { palavraSelecionada, setPalavraSelecionada,
        underLine, setUnderLine, acertos, setAcertos,
        erros, setErros, botaoClicado, setBotaoClicado,
        vitoria, setVitoria, gameOver, setGameOver,
        palpite, setPalpite,
        habilitaInput, setHabilitaInput } = props;

    const rand = Math.random() * palavras.length | 0;
    const testeLetra = []


    function escolherPalavra() {

        setHabilitaInput(!true)
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
    }

    return (

        <>
            <div className="corpo">
                <img data-test="game-image" src={`./assets/forca${erros}.png`} alt="desenho da forca" />
                <button data-test="choose-word" onClick={escolherPalavra} className="star">Escolher Palavra</button>
            </div>

            <div  className={gameOver === false ? "teste" : "teste perdeu"} >
                {underLine.map(e => (
                    <span data-test="word" data-answer={palavraSelecionada} className={vitoria === false ? "underline" : "underline ganhou"}>{e}</span>
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
            <Chute palavraSelecionada={palavraSelecionada} setPalavraSelecionada={setPalavraSelecionada}
                underLine={underLine} setUnderLine={setUnderLine}
                acertos={acertos} setAcertos={setAcertos}
                erros={erros} setErros={setErros}
                botaoClicado={botaoClicado} setBotaoClicado={setBotaoClicado}
                vitoria={vitoria} setVitoria={setVitoria}
                gameOver={gameOver} setGameOver={setGameOver}
                palpite={palpite} setPalpite={setPalpite}
                habilitaInput={habilitaInput} setHabilitaInput={setHabilitaInput}
            />
        </>
    )
}