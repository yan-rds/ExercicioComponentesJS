import React from "react";
import Filho from "./Filho";

// o pai "produz" filhos que possuam informações em comum, no caso o sobrenome.
export default props =>
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Maria</strong></Filho>
        <Filho sobrenome="Silva"><strong>Pedro</strong></Filho>
    </div>