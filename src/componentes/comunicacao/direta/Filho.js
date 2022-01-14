import React from "react";

// Recebe o sobrenome do pai (dentro da construção da tag) e o children dentro do corpo da tag
export default props =>
    <div>
        <p>{props.children} {props.sobrenome}</p>
    </div>