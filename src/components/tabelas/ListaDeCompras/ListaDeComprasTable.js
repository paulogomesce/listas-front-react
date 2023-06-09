import { Component, React/*, useState*/ } from "react";
import axios from "axios";
import Tabela from "../Tabela";
import Header from "./Header";
import Rows from "./Rows";
import BotaoNovaListaCompras from "../../Botoes/BotaoNovaListaCompras";

class ListaDeComprasTable extends Component {

  //const [listasDeCompras, setListasDeCompras] = useState("");
  //const listasDeDesejos = null;
  //const listasDeTarefas = null;

  state = {
    listasDeCompras: [],
    listaSelecionada: {}
  }

  teste = 0;

  componentDidMount() {
    axios.get("http://191.101.70.121:8081/listas/tipo/COMPRAS")
      .then(res => {
        const listasDeCompras = res.data;
        const listaSelecionada = listasDeCompras[10];
        this.setState({ listasDeCompras });
        this.setState({ listaSelecionada });
      })
  }

  render() {
    /*Classes de tablela(tr),table-primary,table-secondary,table-success
    table-danger,table-warning,table-info,table-light,table-dark,*/
    return (
      <>
        <div style={{marginBottom: 10}}>
          <BotaoNovaListaCompras />
        </div>
        <Tabela header={<Header />}
          rows={<Rows listas={this.state.listasDeCompras.sort(function(a,b){return b.id - a.id})} />} />
      </>
    );
  }
};

export default ListaDeComprasTable;