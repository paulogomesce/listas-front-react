import React from "react";
import PropTypes from 'prop-types';

function handleSelecionarLista(event){        
    console.log(event.target.value);
} 

export default function BotaoSelecionarLista({id}){
    return(
        <button className="btn btn-primary" onClick={handleSelecionarLista} value={id}>
            Selecionar
        </button>
    )
}

BotaoSelecionarLista.propTypes = {
    id: PropTypes.number.isRequired
}