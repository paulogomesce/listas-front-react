import dateFormat from "dateformat";

export default function DataHora({dataHora}){
    
    return dateFormat(dataHora, "dd/mm/yyyy HH:mm");
    
}