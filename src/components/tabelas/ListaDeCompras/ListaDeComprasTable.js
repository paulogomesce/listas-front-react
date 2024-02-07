import { useState, useEffect } from "react";
import axios from "axios";
import Tabela from "../Tabela";
import Header from "./Header";
import Rows from "./Rows";
import BotaoNovaListaCompras from "../../Botoes/BotaoNovaListaCompras";

export default function ListaDeComprasTable() {

  const [listasDeCompras, setListasDeCompras] = useState([]);

  useEffect(() => {
    axios.get("http://191.101.70.121:8081/listas/tipo/COMPRAS")
      .then(res => {
        const listasDeCompras = res.data;
        setListasDeCompras(listasDeCompras);
      })
  }, []);

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <BotaoNovaListaCompras />
      </div>
      <Tabela header={<Header />}
              rows={<Rows listas={listasDeCompras.sort(function (a, b) { return b.id - a.id })}
                          setListasDeCompras={setListasDeCompras}/>}
      />
    </>
  );
};