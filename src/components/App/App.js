import React, { Suspense } from "react";
import "./App.css";
import Header from "../header/Header.js";
import ListaDeComprasTable from "../tabelas/ListaDeCompras/ListaDeComprasTable.js";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import FormListaDeCompras from "../Forms/FormListaDeCompras/FormListaDeCompras";
//const FormListaDeCompras = lazy(() => import('../Forms/FormListaDeCompras/FormListaDeCompras'));

function App() {
  return (
    <div className="App">

      <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

      <Header />

      <Switch>
        <Route exact path="/compras">
          <ListaDeComprasTable />
        </Route>

        <Route exact path="/compras/editar/:idLista">
          <Suspense fallback={<div>Carregando</div>}>
            <FormListaDeCompras />
          </Suspense>
        </Route>

        <Route exact path="/compras/criar/">
          <FormListaDeCompras />
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

      <Footer />

    </div>
  );
}

export default App;
