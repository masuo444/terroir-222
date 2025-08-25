import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          日本のものづくりを、世界の市場へ。
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          無料の多言語カタログから始めて、AIチャットで販路を広げる。<br />
          TerroirHubは、IT導入補助金対象の越境DXサービスです。
        </p>
        <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center">
          👉 無料でカタログを作る
        </button>
      </div>
    </section>
  );
}