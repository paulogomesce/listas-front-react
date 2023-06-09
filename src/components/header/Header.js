import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div className="container">
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink to="/compras" className="nav-link btn-sm" activeClassName="active">Compras</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/desejos" className="nav-link btn-sm" activeClassName="active">Desejos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/tarefas" className="nav-link btn-sm" activeClassName="active">Tarefas</NavLink>
                </li>
            </ul>
        </header>
    </div>
);

export default Header;