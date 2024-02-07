import { Link } from "react-router-dom";


export default function BotaoSelecionarLista({ id, listas, setListasDeCompras}) {

    const handleDeletarLista = () => {

        const listaAux = listas;


        var index = listas.findIndex((v) => v.id === id);

        listaAux.splice(index, 1);

        setListasDeCompras([...listas, listaAux]);

        console.log("nova lista:", listas)
        console.log("Index: ", index);
    }

    return (
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <Link className="btn btn-primary btn-sm" to={"/compras/editar/"+id}>
                <i className="bi bi-pencil-square"></i>
            </Link>

            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu">
                    <button type="button" className="dropdown-item" onClick={handleDeletarLista}>
                        Deletar
                    </button>
                </ul>
            </div>
        </div>
        
    )
}