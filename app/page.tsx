"use client";

import React from 'react';

const Home = () => {
  // Cores baseadas na imagem (predominantemente cinzas, escuros e brancos/claros)
  const mainBg = 'bg-gray-200';
  const headerBg = 'bg-gray-700';
  const controlPanelBg = 'bg-gray-100';
  const inputBg = 'bg-white';
  const buttonBg = 'bg-gray-300';
  const buttonHover = 'hover:bg-gray-400';
  const infoBlockBg = 'bg-white';
  const logoBg = 'bg-gray-50'; // Fundo do bloco da logo/resumo
  const totalBoxBg = 'bg-gray-800'; // Fundo do Total Líquido
  const totalBoxText = 'text-green-400';

  // Estilo comum para caixas de texto grandes de exibição de valor
  const valueDisplayClass = 'h-10 text-xl font-bold border border-gray-400 p-2';

  return (
    // Container principal - simula a tela cheia do PDV
    <div className={`min-h-screen ${mainBg} font-sans text-gray-800 p-2`}>
      
      {/* 1. Cabeçalho Superior */}
      <header className={`flex justify-between items-center ${headerBg} text-white p-1 mb-2 shadow-md`}>
        <div className="flex space-x-4 text-sm">
          <span>Nr Venda: **_**</span>
          <span>Data Venda: **12/09/2023 15:00:44**</span>
          <span>Cliente: **CLIENTE PADRÃO**</span>
        </div>
        <div className="text-3xl font-mono">
          **15:50:51**
        </div>
      </header>

      {/* 2. Área Principal de Lançamento/Informação */}
      <main className="flex">
        
        {/* 2a. Painel Esquerdo: Lançamento de Itens e Controles */}
        <div className="w-2/3 pr-2 space-y-2">

          {/* Área de Descrição do Item */}
          <div className={`${controlPanelBg} p-2 border border-gray-400`}>
            <div className="flex items-center space-x-4 mb-2">
              <div className="text-5xl font-bold text-gray-700 w-16 text-center border-r-2 border-gray-400 pr-4">
                1
              </div>
              <div className="flex-grow">
                <div className="text-lg font-bold">Descrição</div>
                <input type="text" className={`w-full ${inputBg} border border-gray-400 p-2 h-10`} readOnly />
              </div>
            </div>

            {/* Campos de Código de Barras e Valor Unitário */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold">Código Barras</label>
                <div className="text-xs text-gray-500">(F3 Pesquisa por descrição)</div>
                <input type="text" className={`w-full ${inputBg} border border-gray-400 p-2 h-10`} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold">Valor Unitário</label>
                <input type="text" className={`w-full ${inputBg} border border-gray-400 p-2 h-10`} readOnly />
              </div>
            </div>
            
            {/* Imagem do Produto (caixa genérica) */}
            <div className="flex justify-center mt-4">
              {/* Esta área é representada pela imagem da caixa na UI original. */}
              <div className="w-32 h-32 flex items-center justify-center border border-gray-400 bg-gray-50">
                {/* Simulação da imagem da caixa - apenas para layout visual */}
                <div className="w-20 h-20 bg-yellow-600 opacity-75 border border-yellow-800 relative">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500 border-b border-yellow-800"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-yellow-600"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-400 border border-yellow-800"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formas de Pagamento e Resumo */}
          <div className={`${controlPanelBg} p-2 border border-gray-400`}>
            <div className="grid grid-cols-3 gap-2 items-center mb-1">
              <label className="font-semibold text-sm">Forma Pgto (1):</label>
              <input type="text" value="A VISTA" readOnly className={`${inputBg} border border-gray-400 p-1 text-sm`} />
              <input type="text" value="R$ 0,00" readOnly className={`${inputBg} border border-gray-400 p-1 text-sm text-right`} />
            </div>
            <div className="grid grid-cols-3 gap-2 items-center mb-4">
              <label className="font-semibold text-sm">Forma Pgto (2):</label>
              <input type="text" readOnly className={`${inputBg} border border-gray-400 p-1 text-sm`} />
              <input type="text" readOnly className={`${inputBg} border border-gray-400 p-1 text-sm text-right`} />
            </div>
            
            {/* Total Bruto, Vendedor e Qtd Itens */}
            <div className="flex justify-between items-center text-sm mt-4">
              <div className="flex items-center space-x-2">
                <label className="font-semibold">Total Bruto:</label>
                <input type="text" readOnly className="w-24 border border-gray-400 p-1 bg-gray-200 text-sm" value="R$###,##" />
              </div>
              <div className="flex items-center space-x-2">
                <label className="font-semibold">Vendedor:</label>
                <input type="text" value="#USER#" readOnly className="w-16 border border-gray-400 p-1 text-sm" />
              </div>
              <div className="flex items-center space-x-2">
                <label className="font-semibold">Qtd. Itens:</label>
                <input type="text" readOnly className="w-10 border border-gray-400 p-1 bg-gray-200 text-sm text-center" value="0" />
              </div>
            </div>
          </div>
        </div>

        {/* 2b. Painel Direito: Resumo da Venda e Botões de Ação */}
        <div className="w-1/3 space-y-2">

          {/* Bloco de Ações (Botões) */}
          <div className={`${infoBlockBg} p-2 border border-gray-400 flex`}>
            
            {/* Coluna Esquerda de Botões (F1 - Q) */}
            <div className="w-1/2 space-y-1 pr-2 border-r border-gray-300">
              {[
                { key: 'F1', label: 'Aplicar Desc. Geral %' },
                { key: 'F2', label: Nova Venda' },
                { key: 'F3', label: 'Localizar Prod.' },
                { key: 'F4', label: 'Alterar Venda' },
                { key: 'F5', label: 'Forma Pgto' },
                { key: 'F6', label: 'Excluir Prod.' },
                { key: 'Q', label: 'Alterar Qtd.' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  className={`flex justify-start items-center w-full ${buttonBg} ${buttonHover} border border-gray-400 p-1 text-xs`}
                >
                  <span className="font-mono font-bold w-6 text-left">{key} =</span>
                  <span className="text-left flex-grow ml-1">{label}</span>
                </button>
              ))}
            </div>

            {/* Coluna Direita de Botões (F7 - Sair) */}
            <div className="w-1/2 space-y-1 pl-2">
              {[
                { key: 'F7', label: 'Imprimir Cupom 80mm' },
                { key: 'F8', label: 'Imprimir Cupom 50mm' },
                { key: 'F9', label: 'Localizar Venda' },
                { key: 'F10', label: 'Selecionar Cliente' },
                { key: 'F11', label: 'Cancelar / Excluir Venda' },
                { key: 'ALT + F', label: 'Finalizar Venda' },
                { key: 'P', label: 'Pesq. Produtos' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  className={`flex justify-start items-center w-full ${buttonBg} ${buttonHover} border border-gray-400 p-1 text-xs`}
                >
                  <span className="font-mono font-bold w-12 text-left">{key} =</span>
                  <span className="text-left flex-grow ml-1">{label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Logo e Área de Venda/Finalização */}
          <div className={`${logoBg} p-4 border border-gray-400 text-center space-y-4`}>
            {/* Simulação da Logo "The Bla" */}
            <div className="flex justify-center">
              <div className="w-40 h-40 border-4 border-pink-300 rounded-full flex items-center justify-center bg-white shadow-inner">
                <span className="text-3xl font-serif italic text-pink-600 font-bold">The Bla</span>
              </div>
            </div>

            {/* Botões de Ação Final */}
            <div className="space-y-2">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 border-b-4 border-blue-700">
                Nova Venda
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 border-b-4 border-green-700">
                Finalizar Venda
              </button>
              <div className="text-xs text-gray-500">Tela Venda Completa</div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-1 border-b-4 border-red-700">
                SAIR
              </button>
            </div>
          </div>
          
          {/* Totais (Líquido, Pago, Troco) */}
          <div className="space-y-1">
            <div className={`flex justify-between items-center ${totalBoxBg} text-white p-2 border-b-2 border-gray-600`}>
              <span className="text-lg font-bold">TOTAL LÍQUIDO</span>
              <div className={`${totalBoxText} text-5xl font-extrabold`}>
                R$ 0,00
              </div>
            </div>
            
            <div className={`flex justify-between items-center ${controlPanelBg} p-2 border border-gray-400`}>
              <span className="font-bold">TOTAL PAGO</span>
              <input type="text" readOnly className={`w-32 text-2xl text-right font-bold border border-gray-400 p-1`} value="R$ 0,00" />
            </div>

            <div className={`flex justify-between items-center ${controlPanelBg} p-2 border border-gray-400`}>
              <span className="font-bold">TROCO</span>
              <input type="text" readOnly className={`w-32 text-2xl text-right font-bold border border-gray-400 p-1`} value="R$ 0,00" />
            </div>
          </div>

        </div>
      </main>

      {/* Rodapé (se houver, mas a imagem não mostra) */}
    </div>
  );
};

export default Home;
