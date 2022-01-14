import React from "react";

export default (props) => {
  return (
    <div>
      <h2>O número é {props.numero}</h2>
      {props.numero % 2 === 0 ? ( // ? indica condicional, condições separadas por :
        <h4>Par</h4>
      ) : (
        <h4>Impar</h4>
      )}
    </div>
  );
};
