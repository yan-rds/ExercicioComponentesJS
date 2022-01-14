import React from "react";
import If from "./If";


export default props => {
 
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <If test ={props.numero % 2 === 0}>
                <h4>Par</h4>
            </If>
            <If test={props.numero % 2 === 1}>
                <h4>Impar</h4>
            </If>
        </div>
    )
}