import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataHora from "../../Genericos/DataHora";

export default function FormListaDeCompras(){
    const {idLista} = useParams();
    const [lista, setLista] = useState({});
    const [usuarioProprietario, setUsuarioProprietario] = useState({});
    const [itens, setItens] = useState([]);


    useEffect(() =>{
        axios.get("http://191.101.70.121:8081/listas/"+idLista)
      .then(res => {
        const lista  = res.data;
        setLista(lista);
        setUsuarioProprietario(lista.usuarioProprietario);
        setItens(lista.itens);
      }) 

    }, []);


    return(
        <>
            <h3>Formulário lista de compras</h3>
            <div>{lista.id}</div>
            <div>{lista.nomeLista}</div>
            <div>{lista.descricaoLista}</div>
            <div><DataHora dataHora={lista.dataCriacao}/></div>
            <div>{lista.tipo}</div>
            <div>{usuarioProprietario.nome}</div>

            <ul>
            {itens.map((item) => (
                <li key={item.id}>{item.produto.nomeProduto}</li>)
            )
            }
            </ul>
        </>
        
    );
}