import React from "react";
import dateFormat, {masks} from "dateformat";

export default function DataHora({dataHora}){
    
    return dateFormat(dataHora, "dd/mm/yyyy HH:mm");
    
}