import {Component, React/*, useState*/} from "react";
import axios from "axios";
import BotaoSelecionarLista from "../../Botoes/BotaoSelecionarLista";
import LinhaTabelaLista from "../../linhasTabela/LinhaTabelaLista/LinhaTabelaLista";

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
        /*Classes de tablela(tr)
        table-primary
        table-secondary
        table-success
        table-danger
        table-warning
        table-info
        table-light
        table-dark
        */
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Data de Criação</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listasDeCompras.map(lista => (
                            <LinhaTabelaLista lista={lista} key={lista.id}/>
                        ))}
                    </tbody>
                </table>

                <p>{this.state.listaSelecionada.id}</p>
            
            </div>
        );
    }
};

export default ListaDeComprasTable;