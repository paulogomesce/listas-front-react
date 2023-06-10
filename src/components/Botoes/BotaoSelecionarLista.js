import { Link } from "react-router-dom";


export default function BotaoSelecionarLista({id}){
    return(
        <Link className="btn btn-primary btn-sm" to={"/compras/"+id}>
            Ver
        </Link>
    )
}