import React from "react";

const Header = () => (
    <div className="container">
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Comprras</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Desejos</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Tarefas</a>
                </li>
            </ul>
        </header>
    </div>
);

export default Header;