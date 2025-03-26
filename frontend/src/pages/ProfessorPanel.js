import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfessorPanel() {
  const [empresa, setEmpresa] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/empresas/4/')
      .then(res => setEmpresa(res.data))
      .catch(() => setErro('Erro ao buscar empresa'));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Painel do Professor</h2>
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
      {empresa && (
        <div>
          <p><strong>ID:</strong> {empresa.id}</p>
          <p><strong>Nome:</strong> {empresa.nome}</p>
          <p><strong>Saldo:</strong> R$ {parseFloat(empresa.saldo).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default ProfessorPanel;