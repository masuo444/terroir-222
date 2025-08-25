import React from 'react';

export default function SolutionOverview() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          テロワールハブなら解決できます
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              英語カタログの無料制作
            </h3>
            <p className="text-gray-700 mb-2">
              御社の商品を英語で分かりやすく表現
            </p>
            <p className="text-gray-600 text-sm">
              海外バイヤーや消費者に伝わるオンラインカタログを作成
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-xl">
            <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              海外専用公式サイト制作
            </h3>
            <p className="text-gray-700 text-sm">
              海外市場に特化したデザイン・機能・決済システムを実装
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Instagramでの海外プロモーション
            </h3>
            <p className="text-gray-700 text-sm">
              海外のターゲット層に直接リーチし、購入・商談に繋げる
            </p>
          </div>
          <div className="bg-yellow-50 p-8 rounded-xl">
            <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              海外輸出サポート
            </h3>
            <p className="text-gray-700 mb-2">
              ドバイ拠点を活かし、海外インポーターやレストラン、ショップへ営業
            </p>
            <p className="text-gray-600 text-sm">
              日本メーカーの代わりに「海外での窓口」として活動
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}