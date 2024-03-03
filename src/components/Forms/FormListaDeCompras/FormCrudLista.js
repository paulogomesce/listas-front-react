import axios from "axios";
import DataHora from "../../Genericos/DataHora";
import { toast } from 'react-toastify';

export default function FormCrudLista({ lista, setLista }) {
  const handleGravarLista = (event) => {
    event.preventDefault();
    
    if (lista.id) {
      toast.promise(
        axios
          .put(process.env.REACT_APP_URL_API + "/", lista)
          .then(function (response) {
            const listaGravada = response.data;
            console.log(listaGravada);
            setLista(listaGravada);
          })
          ,{
            pending: 'Aguarde...',
            success: 'Lista atualizada com sucesso!',
            error: 'Erro ao atualizar a lista.'
          });

    } else {
      toast.promise(
      axios
        .post(process.env.REACT_APP_URL_API + "/", lista)
        .then(function (response) {
          const listaGravada = response.data;
          console.log(listaGravada);
          setLista(listaGravada);
          console.log("Lista criada com SUCESSO!");
        })
        ,{
          pending: 'Aguarde...',
          success: 'Lista criada com sucesso!',
          error: 'Erro ao criar a lista.'
      });
    }
  };

  return (
    <form className="row g-1" onSubmit={handleGravarLista}>
      <div className="col-12">
        <input
          type="text"
          className="form-control form-control-sm"
          id="nomeLista"
          name="nomeLista"
          placeholder="Nome da lista"
          onChange={(event) =>
            setLista({ ...lista, [event.target.name]: event.target.value })
          }
          defaultValue={lista.nomeLista || ""}
        />
      </div>

      <div className="col-12">
        <input
          type="text"
          className="form-control form-control-sm"
          id="descricaoLista"
          name="descricaoLista"
          placeholder="Descrição da lista"
          onChange={(event) =>
            setLista({ ...lista, [event.target.name]: event.target.value })
          }
          defaultValue={lista.descricaoLista || ""}
        />
      </div>

      <div style={{ fontSize: 12, color: "gray" }}>
        Criado em {<DataHora dataHora={lista.dataCriacao} />} por{" "}
      </div>

      <input
        type="hidden"
        name="idUsuarioProprietario"
        id="idUsuarioProprietario"
        value={lista.idUsuarioProprietario}
      />

      <div className="col-2">
        <button className="btn btn-primary btn-sm" type="submit">
          <i className="bi bi-save2"></i> Gravar
        </button>
      </div>
    </form>
  );
}
