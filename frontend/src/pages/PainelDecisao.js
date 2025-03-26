import React, { useState, useEffect } from 'react';

const PainelDecisao = ({ rodada }) => {
  const [empresas, setEmpresas] = useState([]);
  const [empresaId, setEmpresaId] = useState('');
  const [decisao, setDecisao] = useState({
    preco_venda: '',
    prazo_recebimento: '',
    propagandas: 0,
    materia_prima: 0,
    prazo_pagamento: '',
    funcionarios: 0,
    reajuste: 0,
    treinamento: false,
    maquinas: 0,
    emprestimo: 0,
    antecipacao: 0,
  });

  useEffect(() => {
    fetch('http://localhost:8000/api/empresas/')
      .then(res => res.json())
      .then(data => setEmpresas(data))
      .catch(err => console.error('Erro ao buscar empresas:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDecisao((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!empresaId) {
      alert('Selecione uma empresa!');
      return;
    }

    fetch('http://localhost:8000/api/decisoes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...decisao,
        rodada: rodada.id,
        empresa: empresaId
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          console.error('Erro no backend:', data);
          alert('❌ Erro ao registrar decisão: ' + JSON.stringify(data));
          return;
        }
        alert('✅ Decisão registrada com sucesso!');
      })
      .catch((err) => {
        console.error('Erro de rede:', err);
        alert('❌ Falha na conexão com o backend.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><strong>Rodada ativa:</strong> {rodada.descricao}</p>

      <label>Empresa:</label>
      <select value={empresaId} onChange={(e) => setEmpresaId(e.target.value)}>
        <option value="">-- Selecione sua empresa --</option>
        {empresas.map((e) => (
          <option key={e.id} value={e.id}>{e.nome}</option>
        ))}
      </select>

      <hr />

      <label>Preço de venda: <input type="number" step="0.01" name="preco_venda" value={decisao.preco_venda} onChange={handleChange} /></label><br/>
      <label>Prazo de recebimento: <input type="number" name="prazo_recebimento" value={decisao.prazo_recebimento} onChange={handleChange} /></label><br/>
      <label>Propagandas: <input type="number" name="propagandas" value={decisao.propagandas} onChange={handleChange} /></label><br/>
      <label>Matéria-prima: <input type="number" name="materia_prima" value={decisao.materia_prima} onChange={handleChange} /></label><br/>
      <label>Prazo pagamento: <input type="number" name="prazo_pagamento" value={decisao.prazo_pagamento} onChange={handleChange} /></label><br/>
      <label>Funcionários: <input type="number" name="funcionarios" value={decisao.funcionarios} onChange={handleChange} /></label><br/>
      <label>Reajuste salarial (%): <input type="number" step="0.01" name="reajuste" value={decisao.reajuste} onChange={handleChange} /></label><br/>
      <label>Treinamento: <input type="checkbox" name="treinamento" checked={decisao.treinamento} onChange={handleChange} /></label><br/>
      <label>Compra de máquinas: <input type="number" name="maquinas" value={decisao.maquinas} onChange={handleChange} /></label><br/>
      <label>Empréstimo: <input type="number" step="0.01" name="emprestimo" value={decisao.emprestimo} onChange={handleChange} /></label><br/>
      <label>Antecipação de recebíveis: <input type="number" step="0.01" name="antecipacao" value={decisao.antecipacao} onChange={handleChange} /></label><br/>

      <button type="submit">Enviar Decisão</button>
    </form>
  );
};

export default PainelDecisao;