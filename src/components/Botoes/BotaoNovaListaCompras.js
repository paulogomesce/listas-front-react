import { Link } from "react-router-dom";


export default function BotaoNovaListaCompras(){
    return(
        <Link className="btn btn-primary btn-sm" to={"/compras/criar"}>
            <i className="bi bi-bag-plus-fill"></i> Nova lista de compras
        </Link>
    )
}