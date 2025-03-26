import React, { useState } from 'react';
import axios from 'axios';

function DecisaoForm({ empresaId, rodadaId, onSuccess, onError }) {
  const [form, setForm] = useState({
    preco: '',
    propaganda: '',
    prazo: '',
    juros: '',
    compra_maquinas: '',
    materia_prima: '',
    prazo_pagamento: '',
    funcionarios: '',
    reajuste: '',
    treinamento: false,
    emprestimo: '',
    antecipacao: ''
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/decisao/create/', {
        ...form,
        empresa: empresaId,
        rodada: rodadaId
      });
      onSuccess();
    } catch (err) {
      console.error(err);
      onError();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <h4>Preencha os campos de decisão:</h4>

      {[
        ['preco', 'Preço'],
        ['propaganda', 'Propaganda'],
        ['prazo', 'Prazo de recebimento'],
        ['juros', 'Juros'],
        ['compra_maquinas', 'Compra de máquinas'],
        ['materia_prima', 'Matéria-prima'],
        ['prazo_pagamento', 'Prazo de pagamento'],
        ['funcionarios', 'Funcionários'],
        ['reajuste', 'Reajuste (%)'],
        ['emprestimo', 'Empréstimo'],
        ['antecipacao', 'Antecipação']
      ].map(([key, label]) => (
        <div className="col-md-6" key={key}>
          <label className="form-label">{label}</label>
          <input
            type="number"
            name={key}
            value={form[key]}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      ))}

      <div className="col-12 form-check">
        <input
          type="checkbox"
          name="treinamento"
          checked={form.treinamento}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">Treinamento</label>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">Enviar Decisão</button>
      </div>
    </form>
  );
}

export default DecisaoForm;