import React, {useState} from "react";
import Sub from "./Sub";


export default props => {
    // O UseState é necessário pra criar algo "mutável"
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado) {// essa função substitui o num pelo setnum
        setNum(valorGerado)
    }
    return (
        <div> {/*Ao clicar (no botão do filho) é chamada a função que substitui o valor */}
            <h4>Valor: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub> 
        </div>
        
    )
}