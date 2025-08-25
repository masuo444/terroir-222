import React from 'react';

export default function Solution() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          TerroirHubなら、シンプルに始められます。
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
              Phase 1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              無料カタログ（英語）
            </h3>
            <p className="text-gray-700 leading-relaxed">
              写真と商品情報を送るだけで、多言語カタログをPDF/QRで納品。
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
              Phase 2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AIチャットボット付きサイト（補助金対象）
            </h3>
            <p className="text-gray-700 leading-relaxed">
              カタログをもとに、32言語対応のAIサイトを構築。海外のバイヤー・観光客に24時間対応可能。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}