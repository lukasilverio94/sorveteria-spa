import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
            <Link to="/sabores">Sabores</Link>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
