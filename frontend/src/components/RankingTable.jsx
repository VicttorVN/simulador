import React from 'react';

const RankingTable = ({ dados }) => {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h2>Ranking das Empresas</h2>
      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Empresa</th>
            <th>Lucro</th>
            <th>Patrimônio Líquido</th>
            <th>Rodada</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((empresa, index) => (
            <tr key={index}>
              <td><strong>{index + 1}</strong></td>
              <td>{empresa.empresa_nome}</td>
              <td style={{ color: empresa.lucro >= 0 ? 'green' : 'red' }}>
                R$ {Number(empresa.lucro).toFixed(2)}
              </td>
              <td>R$ {Number(empresa.patrimonio_liquido).toFixed(2)}</td>
              <td>{empresa.rodada_numero}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;