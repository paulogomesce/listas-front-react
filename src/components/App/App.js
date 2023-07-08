import React, { lazy, Suspense} from "react"
import './App.css';
import Header from '../Header/Header.js';
import ListaDeComprasTable from '../tabelas/ListaDeCompras/ListaDeComprasTable.js';
import { Route, Switch } from "react-router-dom";
import Footer from '../Footer/Footer';

import FormListaDeCompras from '../Forms/FormListaDeCompras/FormListaDeCompras';
//const FormListaDeCompras = lazy(() => import('../Forms/FormListaDeCompras/FormListaDeCompras'));

function App() {  

  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/compras">
          <ListaDeComprasTable/>
        </Route>

        <Route exact path="/compras/editar/:idLista">
          <Suspense fallback={<div>Carregando</div>} >
            <FormListaDeCompras/>
          </Suspense>          
        </Route>

        <Route exact path="/compras/criar/">
          <FormListaDeCompras/>
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

      <Footer/>

    </div>
  );
}

export default App;
