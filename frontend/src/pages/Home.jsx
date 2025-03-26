// frontend/src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Bem-vindo ao Simulador de Decisões</h1>
      <p>Escolha uma das opções abaixo:</p>
      <ul>
        <li><Link to="/aluno">Painel do Aluno</Link></li>
        <li><Link to="/professor">Painel do Professor</Link></li>
        <li><Link to="/decisao">Enviar Decisão</Link></li>
      </ul>
    </div>
  );
};

export default Home;