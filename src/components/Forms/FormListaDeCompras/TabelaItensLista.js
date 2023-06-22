import FormAddItem from "./FormAddItem";
import RowItemLista from "./RowItemLista";

export default function TabelaItensLista({ itens, lista, setItens }) {
    return (
        <table className="table" >
            <thead className="table-light">
                <tr>
                    <td>Nome</td>
                    <td>Qtd</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {/*Adicionar item*/}

                {lista.id &&
                    <tr style={{ display: "" }}>
                        <td colSpan={3}>
                            <FormAddItem idLista={lista.id} setItens={setItens} itens={itens} />
                        </td>
                    </tr>
                }

                {itens.map((item) => (
                    <RowItemLista item={item} key={item.id}/>
                ))}
            </tbody>
        </table>
    )
}