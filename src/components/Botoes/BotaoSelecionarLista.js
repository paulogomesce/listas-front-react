import React,{useState} from "react";
import PropTypes from 'prop-types';



export default function BotaoSelecionarLista({id}){
    const [idLista, setIdLista] = useState();

    function handleSelecionarLista(idLista){        
        console.log(idLista);
        setIdLista(idLista);
    }

    return(
        <button className="btn btn-primary btn-sm" onClick={() => handleSelecionarLista(id)} value={id}>
            Selecionar({idLista})
        </button>
    )
}

BotaoSelecionarLista.propTypes = {
    id: PropTypes.number.isRequired
}