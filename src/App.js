import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import ListaDeComprasTable from './components/tabelas/lista-de-compras/ListaDeComprasTable';

function App() {
  return (
    <div className="App">

      <Header/>
      <ListaDeComprasTable/>

    </div>
  );
}

export default App;
