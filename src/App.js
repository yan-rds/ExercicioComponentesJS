import React from "react";
import ComFilhos from './componentes/basicStructures/ComFilhos';
import ComParametro from './componentes/basicStructures/ComParametro';
import Card from './componentes/layout/Card';
import './App.css'
import Repeticao from "./componentes/basicStructures/Repeticao";
import Condicional from "./componentes/basicStructures/Condicional";
import CondicionalComIf from "./componentes/basicStructures/CondicionalComIf";
import Pai from "./componentes/comunicacao/direta/Pai";
import Super from "./componentes/comunicacao/indireta/Super";


export default props => (
    <div className="App">
    
    <Card titulo="Componente simples com props" >
      <ComParametro title="Titulo" subtitle="Subtitulo"></ComParametro>
    </Card>
    <Card titulo="Componente com Children (lista)" >
    <ComFilhos>
      <ul>
        <li>Maça</li>
        <li>Banana</li>
        <li>Laranja</li>
        <li>Vergamota</li>
      </ul>
    </ComFilhos>
    </Card>
    <Card titulo="Componente manipulando lista" >
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="Componente utilizando condicional (? : )" >
      <Condicional numero={10}></Condicional>
    </Card>
    <Card titulo="Componente com condicional (<If/>)" >
      <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
    <Card titulo="Componente com comunicação direta entre Pai e Filhos" >
      <Pai sobrenome="Freitas"></Pai>
    </Card>
    <Card titulo="Componente com comunicação indireta e useState" >
      <Super></Super>
    </Card>
  </div>
)