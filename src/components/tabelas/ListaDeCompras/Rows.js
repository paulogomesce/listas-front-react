import React from "react";
import BotaoSelecionarLista from "../../Botoes/BotaoSelecionarLista";

export default function Rows({listas}){

    return (
        listas.map(lista => (
            <tr key={lista.id}>
                <td>
                    <div style={{fontWeight: "bold"}}>{lista.nomeLista}</div>
                    <div>{lista.descricaoLista}</div>
                </td>
                <td>{lista.dataCriacao}</td>
                <td>
                    <BotaoSelecionarLista id={lista.id}/>
                </td>
            </tr>
        ))
    )
}