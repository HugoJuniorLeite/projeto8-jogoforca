
export default function Chute(props) {

    const { palavraSelecionada, setPalavraSelecionada,
        underLine, setUnderLine, acertos, setAcertos,
        erros, setErros, botaoClicado, setBotaoClicado,
        vitoria, setVitoria, gameOver, setGameOver,
        palpite, setPalpite,
        habilitaInput, setHabilitaInput } = props;

    function chutar() {

        if (palpite === palavraSelecionada) {
            setPalavraSelecionada("")
            setBotaoClicado("")
            setAcertos(0)
            setUnderLine(palavraSelecionada.split())
            setVitoria(true)
        }

        else {
            setPalavraSelecionada("")
            setBotaoClicado("")
            setErros(6)
            setUnderLine(palavraSelecionada.split())
            setGameOver(true)

        }
    }

    return (
        <span className="chutar-resposta">
            <strong>Já Sei a resposta!</strong>

            <input data-test="guess-input" disabled={habilitaInput} type="text" onChange={(e) => setPalpite(e.target.value)}
                value={palpite}></input>
            <button data-test="guess-button" className="chute" onClick={chutar}>Chutar</button>

        </span>
    )
}