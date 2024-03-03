import { useState } from "react";
import axios from "axios";

import { toast } from 'react-toastify';

export default function RowItemLista({ item }) {
  const [itemLista, setItemLista] = useState(item);
  const [displayRow, setDisplayRow] = useState(true);

  function configCorRow(statusRow) {
    if (statusRow === "PENDENTE") return "table-light";
    if (statusRow === "CONCLUIDO") return "table-success";
    if (statusRow === "CANCELADO") return "table-danger";
    if (statusRow === "EM_FALTA") return "table-warning";
    else return "table-dark";
  }

  const handleAddCarrinho = (novoStatus) => {
    const updateData = { id: itemLista.id, status: novoStatus };

    toast.promise(
      axios
      .patch(process.env.REACT_APP_URL_API + "/itens", updateData)
      .then(function (response) {
        const itemAtualizado = response.data;
        console.log("Item atualizado com SUCESSO!");
        setItemLista(itemAtualizado);
      })
      .catch(function (error) {
        console.log(error);
      }),
      {
      pending: 'Aguarde...',
      success: 'Sucesso!',
      error: 'Erro ao mudar status do item.'
    });    
  };

  //TODO: implementar para excluir da lista
  const handleExcluir = (idItem) => {
    const confirma = window.confirm("Confirma excluir o item?");

    if (confirma) {
      toast.promise(
        () => (
          
          axios
          .delete(process.env.REACT_APP_URL_API + "/itens/" + idItem)
          .then(function (response) {
            console.log("Item deletado com SUCESSO!");
            setDisplayRow(false);
            document.getElementById("nomeProduto").focus();
          })
          .catch(function (error) {
            console.log(error);
          })

        ),
        {
          pending: 'Aguarde...',
          success: 'Excluído com sucesso!',
          error: 'Erro ao excluir o item.'
        }
      )
    }
  };

  return (
    <tr
      className={configCorRow(itemLista.status)}
      style={{ display: displayRow ? "" : "none" }}
    >
      <td>
        <div>{itemLista.produto.nomeProduto}</div>
        <div style={{ fontSize: 8 }}>{itemLista.status}</div>
      </td>
      <td>{itemLista.quantidade || ""}</td>
      <td>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button
            className="btn btn-primary btn-sm"
            disabled={itemLista.status === "CONCLUIDO"}
            onClick={() => handleAddCarrinho("CONCLUIDO")}
          >
            <i className="bi bi-cart-check"></i>
          </button>

          <div className="btn-group" role="group">
            <button
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              {itemLista.status !== "PENDENTE" && (
                <button
                  className="dropdown-item"
                  onClick={() => handleAddCarrinho("PENDENTE")}
                >
                  Pendente
                </button>
              )}
              {itemLista.status !== "EM_FALTA" && (
                <button
                  className="dropdown-item"
                  onClick={() => handleAddCarrinho("EM_FALTA")}
                >
                  Em falta
                </button>
              )}
              {itemLista.status !== "CANCELADO" && (
                <button
                  className="dropdown-item"
                  onClick={() => handleAddCarrinho("CANCELADO")}
                >
                  Cancelar
                </button>
              )}
              <button
                className="dropdown-item"
                onClick={() => handleExcluir(itemLista.id)}
              >
                Excluir
              </button>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  );
}
