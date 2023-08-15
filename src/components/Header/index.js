import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <img src="assets/logo.png" />
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
