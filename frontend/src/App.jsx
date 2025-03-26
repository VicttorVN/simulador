import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aluno from './pages/Aluno';
import Professor from './pages/Professor';
import Decisao from './pages/Decisao';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="d-flex flex-wrap gap-2 mb-4 border-bottom pb-2">
          <Link to="/aluno" className="btn btn-outline-primary">Painel do Aluno</Link>
          <Link to="/professor" className="btn btn-outline-success">Painel do Professor</Link>
          <Link to="/decisao" className="btn btn-outline-secondary">Formulário de Decisão</Link>
        </nav>

        <Routes>
       <Route path="/aluno" element={<Aluno />} />
	   <Route path="/decisao" element={<Decisao />} />
	   <Route path="/professor" element={<Professor />} />
	   <Route path="/" element={<Aluno />} />
	   

        </Routes>
      </div>
    </Router>
  );
};

export default App;