import React from "react";
import BotaoSelecionarLista from "../../Botoes/BotaoSelecionarLista";
import DataHora from "../../Genericos/DataHora";

export default function Rows({listas}){

    return (
        listas.map(lista => (
            <tr key={lista.id}>
                <td>
                    <div style={{fontWeight: "bold"}}>{lista.nomeLista}</div>
                    <div>{lista.descricaoLista}</div>
                </td>
                <td><DataHora dataHora={lista.dataCriacao} /></td>
                <td>
                    <BotaoSelecionarLista id={lista.id}/>
                </td>
            </tr>
        ))
    )
}