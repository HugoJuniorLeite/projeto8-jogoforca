export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const { palavraSelecionada, setPalavraSelecionada,
        underLine, setUnderLine, acertos, setAcertos,
        erros, setErros, botaoClicado, setBotaoClicado,
        vitoria, setVitoria, gameOver, setGameOver } = props;

    let clone = [...underLine];

    function clicouTeclado(letra) {

        const indices = [];
        const elemento = letra.toLowerCase();
        let acerto = 0;
        let palavraSeparada = palavraSelecionada.split("");
        let cont = 0;
        let contErro = 0;
        let indice = palavraSelecionada.indexOf(elemento);

        if (indice === -1) {
            contErro = contErro + 1
        }
        setErros(contErro + erros)

        while (indice !== -1) {
            indices.push(indice);
            indice = palavraSelecionada.indexOf(elemento, indice + 1);
            cont++;

        }

        console.log(contErro, "conterro")
        console.log(erros, "erros")

        acerto = indices.length + acertos;

        for (let i = 0; i < indices.length; i++) {
            let indiceLetra = indices[i];
            clone[indiceLetra] = elemento;
        }

        setAcertos(cont + acertos);
        setUnderLine(clone);

        if (!botaoClicado.includes(elemento)) {
            setBotaoClicado([...botaoClicado, elemento]);
        }

        if (underLine.length === acerto) {

            setPalavraSelecionada("")
            setBotaoClicado("")
            setAcertos(0)
            setVitoria(true)
        }

        if (erros > 4) {

            setPalavraSelecionada("")
            setBotaoClicado("")
            setAcertos(0)
            setUnderLine(palavraSeparada)
            setGameOver(true)
        }

    }

    return (
        <ul>
            {alfabeto.map(letra => (
                <button data-test="letter" disabled={!palavraSelecionada ? true : false || botaoClicado.includes(letra) ? true : false}
                    onClick={() => clicouTeclado(letra)}
                    className={!palavraSelecionada || botaoClicado.includes(letra) ? "teclado bloqueado" : "teclado liberado"}>
                    {letra.toUpperCase()}
                </button>
            ))}
        </ul>
    )
}