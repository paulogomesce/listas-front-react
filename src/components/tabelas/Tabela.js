import React from 'react';

export default function Tabela({header, rows}){

    return(
        <table className="table table-hover">
            <thead>
                {header}
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>

    );
}