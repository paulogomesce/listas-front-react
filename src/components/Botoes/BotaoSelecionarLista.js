import { Link } from "react-router-dom";


export default function BotaoSelecionarLista({id}){
    return(
        <Link className="btn btn-primary btn-sm" to={"/compras/editar/"+id}>
            <i className="bi bi-pencil-square"></i>
        </Link>
    )
}