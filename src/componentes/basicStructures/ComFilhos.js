import React from "react";

 // Children vêm de props e ficam dentro de uma div
export default props =>
    <div>
        <h2>Os Filhos</h2>
        <div>
            {props.children}
        </div>
    </div>