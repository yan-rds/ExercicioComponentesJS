import React from "react";


export default props => {
    
// Cria um botão que ao ser clicado, gera um numero aleatório
    return (
        <div>
        <button onClick={() => {
            props.onClicar(Math.random())
        }}>Alterar</button>
        </div>
    )
}
    
