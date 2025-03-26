import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link className="navbar-brand" to="/">💼 Simulador</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/aluno">Aluno</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/professor">Professor</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/decisao">Decisão</Link></li>
      </ul>
    </div>
  </nav>
);

export default Header;