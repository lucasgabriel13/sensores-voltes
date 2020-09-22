import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./styles.css";

const data = [
  { name: "Janeiro", temperaturaMedia: 35.5},
  { name: "Fevereiro", temperaturaMedia: 34.2},
  { name: "Abril", temperaturaMedia: 33.9},
  { name: "Maio", temperaturaMedia: 29.2},
  { name: "Junho", temperaturaMedia: 28.5},
  { name: "Julho", temperaturaMedia: 20.2},
  { name: "Agosto", temperaturaMedia: 20.1},
  { name: "Setembro", temperaturaMedia: 23.5},
  { name: "Outubro", temperaturaMedia: 0},
  { name: "Novembro", temperaturaMedia: 0},
  { name: "Dezembro", temperaturaMedia: 0},
];

class SimpleLineChart extends Component {
  render() {
    return (
      <div className="content">
        <div className="grafico">
          <AreaChart
            width={1000}
            height={500}
            data={data}
            margin={{ top: 60, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#61cbfb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#61cbfb" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area dataKey="temperaturaMedia" stroke="#61cbfb" fillOpacity={1} fill="url(#color)"/>
            <Tooltip />
            <Legend />
          </AreaChart>
        </div>
      </div>
    );
  }
}

export default SimpleLineChart;
