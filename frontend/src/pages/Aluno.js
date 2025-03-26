import React from 'react';

const dadosSimulados = {
  empresa: "Empresa 17 - Fictícia",
  receita: 32000,
  despesas: 19000,
  lucro: 13000,
  patrimonioLiquido: 95000,
  fluxoCaixa: 7000,

  materiaPrimaAdquirida: 500,
  materiaPrimaUsada: 460,
  estoqueMateriaPrima: 40,

  producao: 420,
  vendas: 400,
  estoqueProdutos: 20,

  demanda: 450,
  produtosVendidos: 400,

  maquinasDisponiveis: 6,
  capacidadeProximaRodada: 1200,

  valoresAPagar: 6000,
  valoresAReceber: 9500,
};

const Aluno = () => {
  const d = dadosSimulados;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📚 Painel do Aluno – Empresa 17</h2>

      <button className="btn btn-dark mb-4" onClick={() => window.print()}>
        🖨️ Imprimir Relatório
      </button>

      {/* Relatórios Contábeis */}
      <div className="card p-3 shadow-sm mb-3">
        <h4>📊 Balanço Patrimonial</h4>
        <p><strong>Patrimônio Líquido:</strong> R$ {d.patrimonioLiquido.toLocaleString()}</p>
      </div>

      <div className="card p-3 shadow-sm mb-3">
        <h4>📈 Demonstração do Resultado (DRE)</h4>
        <p><strong>Receita:</strong> R$ {d.receita.toLocaleString()}</p>
        <p><strong>Despesas:</strong> R$ {d.despesas.toLocaleString()}</p>
        <p><strong>Lucro:</strong> R$ {(d.lucro).toLocaleString()}</p>
      </div>

      <div className="card p-3 shadow-sm mb-3">
        <h4>💵 Fluxo de Caixa</h4>
        <p><strong>Saldo Atual:</strong> R$ {d.fluxoCaixa.toLocaleString()}</p>
      </div>

      {/* Produção e Estoques */}
      <div className="card p-3 shadow-sm mb-3">
        <h4>🏭 Produção e Vendas</h4>
        <p><strong>Matéria-prima adquirida:</strong> {d.materiaPrimaAdquirida}</p>
        <p><strong>Matéria-prima usada:</strong> {d.materiaPrimaUsada}</p>
        <p><strong>Estoque de matéria-prima:</strong> {d.estoqueMateriaPrima}</p>
        <p><strong>Produção:</strong> {d.producao}</p>
        <p><strong>Vendas:</strong> {d.vendas}</p>
        <p><strong>Estoque de produtos acabados:</strong> {d.estoqueProdutos}</p>
        <p><strong>Demanda gerada:</strong> {d.demanda}</p>
        <p><strong>Produtos vendidos:</strong> {d.produtosVendidos}</p>
      </div>

      {/* Capacidade e Máquinas */}
      <div className="card p-3 shadow-sm mb-3">
        <h4>⚙️ Capacidade Operacional</h4>
        <p><strong>Máquinas disponíveis:</strong> {d.maquinasDisponiveis}</p>
        <p><strong>Capacidade produção próxima rodada:</strong> {d.capacidadeProximaRodada}</p>
      </div>

      {/* Financeiro */}
      <div className="card p-3 shadow-sm mb-5">
        <h4>📦 Financeiro</h4>
        <p><strong>Valores a pagar:</strong> R$ {d.valoresAPagar.toLocaleString()}</p>
        <p><strong>Valores a receber:</strong> R$ {d.valoresAReceber.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Aluno;