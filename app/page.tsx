// components/PDV.jsx
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 p-4 font-sans">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="mr-4">Nr Venda:</span>
          <input type="text" className="border px-2 py-1" />
          <span className="ml-4 mr-2">Data Venda:</span>
          <input type="text" className="border px-2 py-1 w-48" />
          <span className="ml-4 mr-2">Cliente:</span>
          <input
            type="text"
            className="border px-2 py-1 w-48"
            value="CLIENTE PADRÃO"
          />
        </div>
        <div className="text-xl font-mono">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Linha principal */}
      <div className="flex gap-4">
        {/* Quantidade e descrição */}
        <div className="w-16 flex flex-col items-center justify-start bg-gray-200 p-2 rounded">
          <div className="text-center text-2xl font-bold">1</div>
          <div className="mt-2">Qtd</div>
        </div>
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label className="block mb-1">Código Barras (F3 Pesquisa)</label>
            <input type="text" className="border w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Valor Unitário</label>
            <input type="text" className="border w-full p-2" />
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1">
              <label>Forma Pgto (1)</label>
              <input
                type="text"
                className="border w-full p-1"
                value="A VISTA"
              />
            </div>
            <div className="w-32">
              <label>&nbsp;</label>
              <input
                type="text"
                className="border w-full p-1"
                value="R$ 0,00"
              />
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1">
              <label>Forma Pgto (2)</label>
              <input type="text" className="border w-full p-1" />
            </div>
            <div className="w-32">
              <label>&nbsp;</label>
              <input
                type="text"
                className="border w-full p-1"
                value="R$ 0,00"
              />
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-64 h-64 bg-white flex items-center justify-center rounded shadow">
          <Image src="/the-bia-logo.png" alt="Logo" width={200} height={200} />
        </div>
      </div>

      {/* Totais e botões */}
      <div className="mt-4 flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Nova Venda
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Finalizar Venda
          </button>
          <div className="flex gap-2">
            <button className="bg-gray-300 px-2 py-1 rounded">F1</button>
            <button className="bg-gray-300 px-2 py-1 rounded">F2</button>
            <button className="bg-gray-300 px-2 py-1 rounded">F3</button>
            <button className="bg-gray-300 px-2 py-1 rounded">F4</button>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xl font-bold">TOTAL LÍQUIDO</div>
          <div className="text-3xl font-bold">R$ 0,00</div>
          <div className="mt-2 flex gap-4">
            <div>
              <div>TOTAL PAGO</div>
              <input type="text" className="border p-1 w-32" />
            </div>
            <div>
              <div>TROCO</div>
              <input type="text" className="border p-1 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
