import React from 'react';

const PainelAluno = ({ empresa }) => {
  return (
    <div>
      <h3>Empresa: {empresa.nome}</h3>
      <ul>
        <li>Capital Inicial: R$ {empresa.capital_inicial}</li>
        <li>Saldo em Caixa: R$ {empresa.saldo_caixa}</li>
        <li>Status: {empresa.ativo ? 'Ativa' : 'Inativa'}</li>
      </ul>
    </div>
  );
};

export default PainelAluno;