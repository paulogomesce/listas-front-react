import { Link } from "react-router-dom";


export default function BotaoSelecionarLista({id}){
    return(
        <Link className="btn btn-primary btn-sm" to={"/compras/"+id}>
            <i class="bi bi-pencil-square"></i>
        </Link>
    )
}