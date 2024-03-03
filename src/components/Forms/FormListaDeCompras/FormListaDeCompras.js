import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FormCrudLista from "./FormCrudLista";
import TabelaItensLista from "./TabelaItensLista";

import { toast } from 'react-toastify';

/*const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };*/

export default function FormListaDeCompras() {
  const { idLista } = useParams();
  const { criar } = useParams();

  const [lista, setLista] = useState({
    idUsuarioProprietario: 1,
    tipoLista: "COMPRAS",
  });
  const [itens, setItens] = useState([]);

  useEffect(() => {
    if (idLista) {
        toast.promise(
          axios
        .get(process.env.REACT_APP_URL_API + "/" + idLista)
        .then((res) => {
          const lista = res.data;
          setLista(lista);
        })
        ,{pending: 'Carregando a lista, aguarde...'}
      )

      toast.promise(
      axios
        .get(process.env.REACT_APP_URL_API + "/itens/lista/" + idLista)
        .then((res) => {
          const itensResposta = res.data;
          setItens(itensResposta);
        })
        ,{pending: 'Carregando os itens da lista, aguarde...'}
      );


    }
  }, []);

  return (
    <>
      <FormCrudLista lista={lista} setLista={setLista} />
      <br />
      <Suspense fallback={<div>Carregando itens da lista</div>}>
        <TabelaItensLista itens={itens} lista={lista} setItens={setItens} />
      </Suspense>
    </>
  );
}
