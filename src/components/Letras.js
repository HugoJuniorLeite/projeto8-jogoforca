export default function Letras(props){
 
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    
    const {palavra}=props  


    function test(){
    
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



