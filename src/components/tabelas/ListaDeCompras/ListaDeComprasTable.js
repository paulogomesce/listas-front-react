import { useState, useEffect } from "react";
import axios from "axios";
import Tabela from "../Tabela";
import Header from "./Header";
import Rows from "./Rows";
import BotaoNovaListaCompras from "../../Botoes/BotaoNovaListaCompras";
import { toast } from 'react-toastify';

export default function ListaDeComprasTable() {
  const [listasDeCompras, setListasDeCompras] = useState([]);

  useEffect(() => {
    toast.promise(
    axios
      .get(process.env.REACT_APP_URL_API + "/tipo/COMPRAS")
      .then((res) => {
        const listasDeCompras = res.data;
        setListasDeCompras(listasDeCompras);
      })
      ,{pending: 'Carregando...',
      error: 'Erro ao carregar as listas.'
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <BotaoNovaListaCompras />
      </div>
      <Tabela
        header={<Header />}
        rows={
          <Rows
            listas={listasDeCompras.sort(function (a, b) {
              return b.id - a.id;
            })}
            setListasDeCompras={setListasDeCompras}
          />
        }
      />
    </>
  );
}
