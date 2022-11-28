import { useState } from "react";
import Jogo from "./components/Jogo";


function App(props) {  

    const [palavraSelecionada, setPalavraSelecionada] = useState("")
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros]= useState(0)
    const [botaoClicado, setBotaoClicado] = useState([]);
    const [underLine, setUnderLine] = useState([])
    const [vitoria, setVitoria] =useState(false)
    const [gameOver, setGameOver]=useState(false)
    const [palpite, setPalpite]=useState("")
    const [habilitaInput, setHabilitaInput]=useState(true)

  return (
    <Jogo palavraSelecionada={palavraSelecionada} setPalavraSelecionada={setPalavraSelecionada} 
    underLine={underLine} setUnderLine={setUnderLine}
    acertos={acertos} setAcertos={setAcertos}
    erros={erros} setErros={setErros}
    botaoClicado={botaoClicado} setBotaoClicado={setBotaoClicado}
    vitoria={vitoria} setVitoria={setVitoria}
    gameOver={gameOver} setGameOver={setGameOver}
    palpite={palpite} setPalpite={setPalpite}
    habilitaInput={habilitaInput} setHabilitaInput={setHabilitaInput}/>
  );
}

export default App;