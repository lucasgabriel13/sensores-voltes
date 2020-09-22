import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Header from '../../components/header';

import "./styles.css";

function Registro() {
  const [valores, setValor] = useState([]);

  useEffect(() => {
    const getValor = async () => {
      const response = await api.get("/sensor");
      setValor(response.data);
    };
    getValor();
  });

  return (
    <div className="content">
      <Header/>
      <h1 id="title">Tabela de Registros de Temperatura</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Umidade %</th>
            <th>Temperatura ºC</th>
            <th>Data / Hora</th>
          </tr>
        </thead>
        <tbody>
          {valores.map((valor, index) => (
            <tr key={index}>
              <td>{valor.id}</td>
              <td>{valor.umidade}</td>
              <td>{valor.temperatura}</td>
              <td>{valor.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registro;
