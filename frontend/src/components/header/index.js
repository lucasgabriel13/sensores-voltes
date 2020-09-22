import React from "react";
import "./styles.css";

export default function Header() {

  return (
    <header>
      <h1 >Sensores e Volts</h1>
      <div>
        <a href="/">Início</a>
        <a href="/registro">Registros</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </header>
  );
}

