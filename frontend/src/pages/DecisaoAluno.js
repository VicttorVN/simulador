import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DecisaoForm from './DecisaoForm';

function DecisaoAluno() {
  const [empresas, setEmpresas] = useState([]);
  const [empresaId, setEmpresaId] = useState('');
  const [rodadaAtual, setRodadaAtual] = useState(null);
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get('/api/empresas/')
      .then(res => setEmpresas(res.data))
      .catch(() => setErro('Erro ao carregar empresas.'));

    axios.get('/api/rodadas/ativas/')
      .then(res => setRodadaAtual(res.data[0])) // pega a primeira rodada ativa
      .catch(() => setErro('Erro ao buscar rodada atual.'));
  }, []);

  const handleEmpresaSelect = (e) => {
    setEmpresaId(e.target.value);
    setMensagem('');
    setErro('');
  };

  return (
    <div className="container mt-5">
      <h2>Painel de Decisão</h2>

      <label>Selecione sua empresa:</label>
      <select value={empresaId} onChange={handleEmpresaSelect} className="form-select mb-3">
        <option value="">-- Escolha uma empresa --</option>
        {empresas.map(e => (
          <option key={e.id} value={e.id}>{e.nome}</option>
        ))}
      </select>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}

      {empresaId && rodadaAtual ? (
        <DecisaoForm
          empresaId={empresaId}
          rodadaId={rodadaAtual.id}
          onSuccess={() => setMensagem('Decisão enviada com sucesso!')}
          onError={() => setErro('Erro ao enviar decisão.')}
        />
      ) : (
        <p>Selecione a empresa e aguarde carregamento da rodada.</p>
      )}
    </div>
  );
}

export default DecisaoAluno;