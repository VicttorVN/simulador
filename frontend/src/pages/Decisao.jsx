// frontend/src/pages/Decisao.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Decisao = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    rodada: '',
    preco: '',
    prazo: '',
    propaganda: '',
    materia_prima: '',
    prazo_pagamento: '',
    funcionarios: '',
    reajuste: '',
    treinamento: false,
    maquinas: '',
    emprestimo: '',
    antecipacao: ''
  });

  const [resposta, setResposta] = useState(null);
  const [erro, setErro] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResposta(null);
    setErro(null);
    try {
      const response = await axios.post('/api/decisao/create/', formData);
      setResposta(response.data);
    } catch (err) {
      console.error(err);
      setErro('Erro ao enviar decisão. Verifique os dados.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>📥 Enviar Decisão da Rodada</h2>
      <form onSubmit={handleSubmit}>
        {[
          ['empresa', 'ID da Empresa'],
          ['rodada', 'ID da Rodada'],
          ['preco', 'Preço de Venda'],
          ['prazo', 'Prazo de Recebimento'],
          ['propaganda', 'Qtd de Propagandas'],
          ['materia_prima', 'Qtd de Matéria Prima'],
          ['prazo_pagamento', 'Prazo p/ Pagar Matéria-Prima'],
          ['funcionarios', 'Funcionários (+/-)'],
          ['reajuste', 'Reajuste Salarial (%)'],
          ['maquinas', 'Compra de Máquinas'],
          ['emprestimo', 'Valor do Empréstimo'],
          ['antecipacao', 'Valor de Antecipação']
        ].map(([key, label]) => (
          <div className="mb-3" key={key}>
            <label className="form-label">{label}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="treinamento"
            checked={formData.treinamento}
            onChange={handleChange}
            className="form-check-input"
            id="treinamentoCheck"
          />
          <label className="form-check-label" htmlFor="treinamentoCheck">
            Incluir Treinamento?
          </label>
        </div>

        <button type="submit" className="btn btn-success">Enviar Decisão</button>
      </form>

      {resposta && (
        <div className="alert alert-success mt-3">
          ✅ Decisão enviada! Resultado ID: <strong>{resposta.resultado_id}</strong>
        </div>
      )}

      {erro && (
        <div className="alert alert-danger mt-3">
          {erro}
        </div>
      )}
    </div>
  );
};

export default Decisao;