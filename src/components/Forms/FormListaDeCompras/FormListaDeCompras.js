import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormAddItem from "./FormAddItem";
import DataHora from "../../Genericos/DataHora";

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

    const handleGravarLista = (event) => {
        event.preventDefault()
        console.log(lista)
        axios.post('http://191.101.70.121:8081/listas', lista)
            .then(function (response) {
                const listaGravada = response.data;
                console.log(listaGravada)
                setLista(listaGravada);
                console.log("Lista gravada com SUCESSO!")
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <form className="row g-1" onSubmit={handleGravarLista}>
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nomeLista"
                        name="nomeLista"
                        placeholder="Nome da lista"
                        onChange={(event) =>(setLista({...lista,[event.target.name]: event.target.value}))}
                        defaultValue={lista.nomeLista || ""} />
                </div>

                <div className="col-12">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="descricaoLista"
                        name="descricaoLista"
                        placeholder="Descrição da lista"
                        onChange={(event) =>(setLista({...lista,[event.target.name]: event.target.value}))}
                        defaultValue={lista.descricaoLista || ""} />
                </div>

                <div style={{fontSize: 12, color: "gray"}}>Criado em {<DataHora dataHora={lista.dataCriacao}/>} por </div>

                <input
                    type="hidden"
                    name="idUsuarioProprietario"
                    id="idUsuarioProprietario"
                    value={lista.idUsuarioProprietario} />

                <div className="col-2">
                    <button className="btn btn-primary btn-sm" type="submit">
                        <i className="bi bi-save2"></i> Gravar
                    </button>
                </div>
            </form>
            
            <br />

            <table className="table" >
                <thead className="table-light">
                    <tr>
                        <td>Nome</td>
                        <td>Qtd</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {/*Adicionar item*/}

                    {lista.id &&
                        <tr style={{display: ""}}>
                            <td colSpan={3}>
                                <FormAddItem idLista={lista.id} setItens={setItens} itens={itens}/>
                            </td>
                        </tr>
                    }

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