import './App.css';
import Header from '../Header/Header.js';
import ListaDeComprasTable from '../tabelas/ListaDeCompras/ListaDeComprasTable.js';
import { Route, Switch } from "react-router-dom";

function App() {  

  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/compras">
          <ListaDeComprasTable/>
        </Route>

        <Route exact path="/desejos">
          <h1>Desejos</h1>
        </Route>

        <Route exact path="/tarefas">
          <h1>Tarefas</h1>
        </Route>
        
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
