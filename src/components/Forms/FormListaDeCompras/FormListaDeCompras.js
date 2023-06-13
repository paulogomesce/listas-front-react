import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataHora from "../../Genericos/DataHora";

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

export default function FormListaDeCompras() {
    const { idLista } = useParams();
    const [lista, setLista] = useState({ idUsuarioProprietario: 1 });
    const [usuarioProprietario, setUsuarioProprietario] = useState({});
    const [itens, setItens] = useState([]);
    const [idUsuariosConvidados, setIdUsuariosConvidados] = useState([]);
    const [itemCrud, setItemCrud] = useReducer(formReducer, {"idLista" : idLista});//useState({});

    useEffect(() => {
        axios.get("http://191.101.70.121:8081/listas/" + idLista)
            .then(res => {
                const lista = res.data;
                setLista(lista);
                setUsuarioProprietario(lista.usuarioProprietario);
                setItens(lista.itens);
            })

    }, []);

    const handleChangeItem = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        setItemCrud({
          name: event.target.name,
          value: isCheckbox ? event.target.checked : event.target.value,
        });
    };

    const handleSubmitAddItem = (event) =>{
        event.preventDefault();        
        const novoItem = {
            idLista : itemCrud.idLista,
            produto:{
                nomeProduto : itemCrud.nomeProduto
            },
            quantidade : itemCrud.quantidade
        }

        axios.post('http://191.101.70.121:8081/listas/adicionar-item', novoItem)
          .then(function (response) {
            const itemGravado = response.data;

            console.log(itemGravado);

            setItens([...itens, itemGravado]);

            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
    }

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
                            <form onSubmit={handleSubmitAddItem}>
                                <div className="row g-1">
                                    
                                    <div className="col-8">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="nomeProduto"
                                            name="nomeProduto"
                                            placeholder="Nome do produto"
                                            onChange={handleChangeItem}/>
                                    </div>
                                    <div className="col-2">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="quantidade"
                                            name="quantidade"
                                            placeholder="Quantidade"
                                            onChange={handleChangeItem}/>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-primary btn-sm" type="submit">
                                            <i className="bi bi-check-lg"></i>
                                        </button>
                                    </div>
                                    
                                </div>
                            </form>                           
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