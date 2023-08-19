import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <img src="assets/logo.png" className="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sabores">Sabores</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
