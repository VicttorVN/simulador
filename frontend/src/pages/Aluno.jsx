import React from 'react';

const mockRelatorio = {
  empresa: "Alpha Ltda",
  lucro: 12000,
  receita: 25000,
  despesas: 13000,
  patrimonio: 88000,
  fluxoCaixa: 8000,
  materiaPrimaAdquirida: 400,
  materiaPrimaUsada: 350,
  producao: 300,
  vendas: 280,
  estoqueFinal: 50,
  demanda: 320,
  produtosVendidos: 280,
  maquinasDisponiveis: 5,
  capacidadeProximaRodada: 1000,
  aPagar: 5000,
  aReceber: 8000,
};

const Aluno = () => {
  const dados = mockRelatorio;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📚 Painel do Aluno</h2>

      <button className="btn btn-dark mb-4" onClick={() => window.print()}>
        🖨️ Imprimir Relatório
      </button>

      <div className="card p-3 shadow-sm mb-3">
        <h4>💰 Dados Financeiros</h4>
        <p><strong>Empresa:</strong> {dados.empresa}</p>
        <p><strong>Lucro:</strong> R$ {dados.lucro.toLocaleString()}</p>
        <p><strong>Receita:</strong> R$ {dados.receita.toLocaleString()}</p>
        <p><strong>Despesas:</strong> R$ {dados.despesas.toLocaleString()}</p>
        <p><strong>Patrimônio Líquido:</strong> R$ {dados.patrimonio.toLocaleString()}</p>
        <p><strong>Fluxo de Caixa:</strong> R$ {dados.fluxoCaixa.toLocaleString()}</p>
      </div>

      <div className="card p-3 shadow-sm mb-3">
        <h4>🏭 Produção e Vendas</h4>
        <p><strong>Matéria-prima adquirida:</strong> {dados.materiaPrimaAdquirida}</p>
        <p><strong>Matéria-prima usada:</strong> {dados.materiaPrimaUsada}</p>
        <p><strong>Produção:</strong> {dados.producao}</p>
        <p><strong>Vendas:</strong> {dados.vendas}</p>
        <p><strong>Estoque final:</strong> {dados.estoqueFinal}</p>
        <p><strong>Demanda gerada:</strong> {dados.demanda}</p>
        <p><strong>Produtos vendidos:</strong> {dados.produtosVendidos}</p>
      </div>

      <div className="card p-3 shadow-sm mb-3">
        <h4>📦 Outros</h4>
        <p><strong>Máquinas disponíveis:</strong> {dados.maquinasDisponiveis}</p>
        <p><strong>Capacidade próxima rodada:</strong> {dados.capacidadeProximaRodada}</p>
        <p><strong>Valores a pagar:</strong> R$ {dados.aPagar.toLocaleString()}</p>
        <p><strong>Valores a receber:</strong> R$ {dados.aReceber.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Aluno;