import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const RelatorioOperacional = ({ resultados }) => {
  const dados = resultados
    .map((r) => ({
      rodada: `R${r.rodada_numero}`,
      producao: Number(r.producao),
      vendas: Number(r.vendas),
      estoque_mp: Number(r.estoque_mp),
      estoque_produto: Number(r.estoque_produto),
      maquinas: Number(r.maquinas),
      fluxo_caixa: Number(r.fluxo_caixa),
    }))
    .reverse();

  return (
    <div className="mt-5">
      <h2>Indicadores Operacionais</h2>

      {/* Gráfico de Produção */}
      <div className="mb-4">
        <h4>Produção por Rodada</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rodada" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="producao" stroke="#28a745" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabela de Indicadores */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Rodada</th>
              <th>Produção</th>
              <th>Vendas</th>
              <th>Estoque MP</th>
              <th>Estoque Produto</th>
              <th>Máquinas</th>
              <th>Fluxo de Caixa</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((d, i) => (
              <tr key={i}>
                <td>{d.rodada}</td>
                <td>{d.producao}</td>
                <td>{d.vendas}</td>
                <td>{d.estoque_mp}</td>
                <td>{d.estoque_produto}</td>
                <td>{d.maquinas}</td>
                <td>R$ {d.fluxo_caixa.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RelatorioOperacional;