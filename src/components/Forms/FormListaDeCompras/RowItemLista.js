import { useState } from "react";
import axios from "axios";

export default function RowItemLista({ item }) {

    const [itemLista, setItemLista] = useState(item);

    function configCorRow(statusRow) {
        if (statusRow === "PENDENTE")
            return "table-light"
        if (statusRow === "CONCLUIDO")
            return "table-success"
        if (statusRow === "CANCELADO")
            return "table-danger"
        if (statusRow === "EM_FALTA")
            return "table-warning"
        else
            return "table-dark"
    }

    const handleAddCarrinho = (novoStatus) => {

        const updateData = { id: itemLista.id, status: novoStatus }

        axios.patch('http://191.101.70.121:8081/listas/itens', updateData)
            .then(function (response) {
                const itemAtualizado = response.data;
                console.log("Item atualizado com SUCESSO!")
                setItemLista(itemAtualizado)
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <tr className={configCorRow(itemLista.status)}>
            <td>
                <div>{itemLista.produto.nomeProduto}</div>
                <div style={{fontSize:8}}>{itemLista.status}</div>
            </td>
            <td>{itemLista.quantidade || ""}</td>
            <td>
                <div className="btn-group btn-group-sm" role="group" aria-label="Button group with nested dropdown">
                    <button className="btn btn-primary btn-sm"
                        disabled={itemLista.status === "CONCLUIDO"}
                        onClick={() => (handleAddCarrinho("CONCLUIDO"))}>
                        <i className="bi bi-cart-check"></i>
                    </button>

                    <div className="btn-group" role="group">
                        <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                        </button>
                        <ul className="dropdown-menu">
                            <button className="dropdown-item"
                                onClick={() => (handleAddCarrinho("PENDENTE"))}>
                                Retirar
                            </button>
                            <button className="dropdown-item"
                                onClick={() => (handleAddCarrinho("EM_FALTA"))}>
                                Em falta
                            </button>
                            <button className="dropdown-item"
                                onClick={() => (handleAddCarrinho("CANCELADO"))}>
                                Cancelar
                            </button>                                                        
                        </ul>
                    </div>
                </div>








            </td>
        </tr>
    )

}