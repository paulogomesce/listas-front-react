import React from 'react';

export default function Tabela({header, rows}){

    return(
        <table className="table table-hover">
            <thead className="table-light">
                {header}
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>

    );
}