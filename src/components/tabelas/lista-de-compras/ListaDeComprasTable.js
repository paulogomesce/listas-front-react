import {React, useState} from "react";

const ListaDeComprasTable = () => {

    const [listasDeCompras, setListasDeCompras] = useState("");
    //const listasDeDesejos = null;
    //const listasDeTarefas = null;
  
    fetch("http://191.101.70.121:8081/listas")
    .then(response => response.json())
    .then(xxx => setListasDeCompras(xxx))
    .catch(function(error){
      alert("Erro na requisição");
    })
    .finally(function(){
      console.log(listasDeCompras);
    });



    <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col">Class</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            
            <tr className="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-light">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr className="table-dark">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
        </tbody>
    </table>
};

export default ListaDeComprasTable;