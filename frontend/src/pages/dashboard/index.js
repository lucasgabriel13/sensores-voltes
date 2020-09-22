import React from "react";
import Header from '../../components/header';
import Grafico from "../../components/grafico";

import "./styles.css";

export default function Dasboard() {
  return (
    <div className="content">
      <Header/>
      <div className='group'>
        <h1>Média de Temperatura</h1>
        <Grafico />
      </div>
    </div>
  );
}
