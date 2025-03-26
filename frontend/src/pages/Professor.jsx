// frontend/src/pages/Professor.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Professor.css'; // opcional para estilização futura

const Professor = () => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/ranking/')
      .then(response => {
        setRanking(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar ranking:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🏆 Ranking das Empresas por Patrimônio</h2>

      {loading ? (
        <p>Carregando ranking...</p>
      ) : ranking.length === 0 ? (
        <p>Nenhum dado de ranking disponível.</p>
      ) : (
        <table className="table table-striped table-hover shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Empresa</th>
              <th>Lucro (R$)</th>
              <th>Patrimônio Líquido (R$)</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}º</td>
                <td>{item.empresa}</td>
                <td>{parseFloat(item.lucro).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{parseFloat(item.patrimonio).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Professor;