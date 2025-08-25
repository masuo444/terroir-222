import React from 'react';

export default function Benefits() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          生産者のメリット
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-yellow-50 p-6 rounded-xl">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              低コストで海外市場へアプローチ
            </h3>
            <p className="text-gray-600 text-sm">
              大規模な投資不要で海外展開をスタートできます
            </p>
          </div>
          <div className="text-center bg-red-50 p-6 rounded-xl">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              英語対応不要
            </h3>
            <p className="text-gray-600 text-sm">
              英語カタログを制作、海外対応サポートいたします。
            </p>
          </div>
          <div className="text-center bg-blue-50 p-6 rounded-xl">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              海外に「自社の公式サイト」
            </h3>
            <p className="text-gray-600 text-sm">
              本格的な多言語サイトから簡易カタログまで選択可能
            </p>
          </div>
          <div className="text-center bg-green-50 p-6 rounded-xl">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              将来の輸出・販路拡大に繋がる
            </h3>
            <p className="text-gray-600 text-sm">
              海外展開の第一歩を着実に踏み出せます
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}