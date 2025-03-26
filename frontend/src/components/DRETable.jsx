import React from 'react';

const DRETable = ({ dados }) => {
  return (
    <div className="mt-4">
      <h2 className="mb-3">Demonstração de Resultados (DRE)</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Rodada</th>
              <th>Receita</th>
              <th>Custo</th>
              <th>Lucro</th>
              <th>Patrimônio Líquido</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((r, i) => (
              <tr key={i}>
                <td>{r.rodada_numero}</td>
                <td>R$ {Number(r.receita).toFixed(2)}</td>
                <td>R$ {Number(r.custo).toFixed(2)}</td>
                <td className={r.lucro >= 0 ? 'text-success' : 'text-danger'}>
                  R$ {Number(r.lucro).toFixed(2)}
                </td>
                <td>R$ {Number(r.patrimonio_liquido).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DRETable;