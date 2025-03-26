import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aluno from './pages/Aluno';
import Professor from './pages/Professor';
import Decisao from './pages/Decisao';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/aluno" element={<Aluno />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/decisao" element={<Decisao />} />
        <Route path="*" element={<div className="container mt-5">Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;