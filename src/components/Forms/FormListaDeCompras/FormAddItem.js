import { useReducer } from "react";
import axios from "axios";

const formReducer = (state, event) => {
    if (event.limpaForm) {
        return {
            nomeProduto: "",
            quantidade: ""
        };
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};

export default function FormAddItem({ idLista, setItens, itens }) {

    const [itemCrud, setItemCrud] = useReducer(formReducer, {});

    const handleChangeItem = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        setItemCrud({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        });
    };

    const handleSubmitAddItem = (event) => {
        event.preventDefault();
        const novoItem = {
            idLista: idLista,
            produto: {
                nomeProduto: itemCrud.nomeProduto
            },
            quantidade: itemCrud.quantidade,
            status:'PENDENTE'
        }
        console.log(novoItem)
        axios.post('http://191.101.70.121:8081/listas/itens', novoItem)
            .then(function (response) {
                const itemGravado = response.data;
                setItens([...itens, itemGravado]);
                setItemCrud({ limpaForm: true });
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmitAddItem}>
            <div className="row g-1">

                <div className="col-8">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nomeProduto"
                        name="nomeProduto"
                        placeholder="Nome do produto"
                        onChange={handleChangeItem}
                        value={itemCrud.nomeProduto || ""}
                        required />
                </div>
                <div className="col-2">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="quantidade"
                        name="quantidade"
                        placeholder="Quantidade"
                        onChange={handleChangeItem}
                        value={itemCrud.quantidade || ""}
                        required />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary btn-sm" type="submit">
                        <i className="bi bi-check-lg"></i>
                    </button>
                </div>

            </div>
        </form>
    )
}