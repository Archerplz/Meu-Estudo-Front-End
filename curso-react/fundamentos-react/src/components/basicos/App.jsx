import React from "react";
import ComParametro from "./ComParametro";
import Fragmento from "./Fragmento";
import Primeiro from "./Primeiro";

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3} />

        <Primeiro></Primeiro>

    </div>
);
