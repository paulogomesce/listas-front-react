import {Component, React/*, useState*/} from "react";
import axios from "axios";
import Tabela from "../Tabela";
import Header from "./Header";
import Rows from "./Rows";

class ListaDeComprasTable extends Component {

    //const [listasDeCompras, setListasDeCompras] = useState("");
    //const listasDeDesejos = null;
    //const listasDeTarefas = null;

    state = {
        listasDeCompras:[],
        listaSelecionada:{}
    }

    teste = 0;

    componentDidMount(){
        console.log("Componente montado!");
        axios.get("http://191.101.70.121:8081/listas")
      .then(res => {
        const listasDeCompras  = res.data;
        const listaSelecionada = listasDeCompras[10];
        this.setState({ listasDeCompras });
        this.setState({ listaSelecionada });
      })      
    }

    render(){
        console.log(this.state.listasDeCompras);
        /*Classes de tablela(tr),table-primary,table-secondary,table-success
        table-danger,table-warning,table-info,table-light,table-dark,*/
        return(
            <Tabela header={<Header/>}
                    rows={<Rows listas={this.state.listasDeCompras}/>}/>
        );
    }
};

export default ListaDeComprasTable;