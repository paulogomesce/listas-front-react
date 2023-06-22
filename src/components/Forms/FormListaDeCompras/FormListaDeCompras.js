import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FormCrudLista from "./FormCrudLista";
import TabelaItensLista from "./TabelaItensLista";

/*const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };*/

export default function FormListaDeCompras() {
    const { idLista } = useParams();
    const { criar } = useParams();

    const [lista, setLista] = useState({ idUsuarioProprietario: 1, tipoLista : "COMPRAS"});
    const [itens, setItens] = useState([]);

    useEffect(() => {
        console.clear()
        if(idLista){
            axios.get("http://191.101.70.121:8081/listas/" + idLista)
                .then(res => {
                    const lista = res.data;
                    setLista(lista);
                    setItens(lista.itens);
                })
        }
    }, []);

    return (
        <>  
            <FormCrudLista lista={lista} setLista={setLista}  />
            <br />
            <TabelaItensLista  itens={itens} lista={lista} setItens={setItens} />                           
        </>

    );
}