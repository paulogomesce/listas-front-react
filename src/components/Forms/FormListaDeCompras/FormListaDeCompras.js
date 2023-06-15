import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormAddItem from "./FormAddItem";

/*const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };*/

export default function FormListaDeCompras() {
    const { idLista } = useParams();
    const [lista, setLista] = useState({ idUsuarioProprietario: 1 });
    //const [usuarioProprietario, setUsuarioProprietario] = useState({});
    const [itens, setItens] = useState([]);
    //const [idUsuariosConvidados, setIdUsuariosConvidados] = useState([]);

    useEffect(() => {
        axios.get("http://191.101.70.121:8081/listas/" + idLista)
            .then(res => {
                const lista = res.data;
                setLista(lista);
                //setUsuarioProprietario(lista.usuarioProprietario);
                setItens(lista.itens);
            })

    }, []);

    return (
        <>
            <form className="row g-1">
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nomeLista"
                        name="nomeLista"
                        placeholder="Nome da lista"
                        defaultValue={lista.nomeLista || ""} />
                </div>

                <div className="col-12">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="descricaoLista"
                        name="descricaoLista"
                        placeholder="Descrição da lista"
                        defaultValue={lista.descricaoLista || ""} />
                </div>

                <input
                    type="hidden"
                    name="idUsuarioProprietario"
                    id="idUsuarioProprietario"
                    value={lista.idUsuarioProprietario} />
            </form>
            
            <br />

            <table className="table">
                <thead className="table-light">
                    <tr>
                        <td>Nome</td>
                        <td>Qtd</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {/*Adicionar item*/}
                    <tr style={{display: ""}}>
                        <td colSpan={3}>
                            <FormAddItem idLista={idLista} setItens={setItens} itens={itens}/>
                        </td>
                    </tr>

                    {itens.map((item) => (
                        <tr key={item.id}>
                            <td>{item.produto.nomeProduto}</td>
                            <td>{item.quantidade||""}</td>
                            <td><button className="btn btn-primary btn-sm"><i className="bi bi-cart-check"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>               
        </>

    );
}