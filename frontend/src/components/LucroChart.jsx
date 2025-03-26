import React from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const LucroChart = ({ resultados }) => {
  const dados = resultados
    .map((r) => ({
      rodada: `R${r.rodada_numero}`,
      lucro: Number(r.lucro),
    }))
    .reverse();

  return (
    <div className="mt-4">
      <h2>Evolução do Lucro</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rodada" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lucro" stroke="#007bff" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LucroChart;