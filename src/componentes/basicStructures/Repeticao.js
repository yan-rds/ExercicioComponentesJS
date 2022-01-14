import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  // Utiliza o map (como no stream do java) pra transformar objetos de uma lista
  function getProdutosListItem() {
    return produtos.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.nome} - R$ {prod.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProdutosListItem()}</ul>
    </div>
  );
};
