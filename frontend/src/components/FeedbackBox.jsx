import React from 'react';

const FeedbackBox = ({ resultado }) => {
  const lucro = Number(resultado.lucro);
  const rodada = resultado.rodada_numero;

  const mensagem = lucro >= 0
    ? `Parabéns! Sua empresa teve lucro na rodada ${rodada}. Continue assim! 🚀`
    : `Atenção! Houve prejuízo na rodada ${rodada}. Reavalie suas estratégias. 📉`;

  const estilo = {
    padding: '1rem',
    borderRadius: '6px',
    marginTop: '1rem',
    backgroundColor: lucro >= 0 ? '#d4edda' : '#f8d7da',
    color: lucro >= 0 ? '#155724' : '#721c24',
    border: `1px solid ${lucro >= 0 ? '#c3e6cb' : '#f5c6cb'}`
  };

  return (
    <div style={estilo}>
      <strong>{mensagem}</strong>
    </div>
  );
};

export default FeedbackBox;