import React from 'react';

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          料金プラン
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* ライトプラン */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ライトプラン</h3>
            <div className="text-3xl font-bold text-blue-900 mb-6">30万円</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                多言語カタログ（２言語）
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                海外版LP制作
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                簡易デザイン調整
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                初期導入サポート
              </li>
            </ul>
          </div>

          {/* スタンダードプラン（強調） */}
          <div className="bg-blue-900 rounded-lg shadow-xl p-8 transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold">
              おすすめ
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">スタンダードプラン</h3>
            <div className="text-3xl font-bold text-white mb-6">50万円</div>
            <ul className="space-y-3 mb-8 text-white">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                多言語カタログ（主要5言語）
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                海外版ホームページ制作
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                専用チャットボット（32言語対応）
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                翻訳チェック＋トレーニング
              </li>
            </ul>
          </div>

          {/* プレミアムプラン */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">プレミアムプラン</h3>
            <div className="text-3xl font-bold text-blue-900 mb-6">70万円</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                多言語カタログ（主要5言語）
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                海外版ホームページ制作
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                専用チャットボット（多言語対応）
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                決済システム連携
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                できる限りのカスタマイズ
              </li>
            </ul>
          </div>
        </div>
        
        {/* IT導入補助金セクション */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            IT導入補助金を導入すると
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2">ライトプラン</h4>
              <div className="text-2xl font-bold text-blue-900 mb-2">30万円 → 10万円</div>
              <div className="text-green-700 font-semibold">実質負担額 66%削減</div>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-400">
              <div className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                おすすめ
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">スタンダードプラン</h4>
              <div className="text-2xl font-bold text-blue-900 mb-2">50万円 → 17万円</div>
              <div className="text-green-700 font-semibold">実質負担額 66%削減</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2">プレミアムプラン</h4>
              <div className="text-2xl font-bold text-blue-900 mb-2">100万円 → 34万円</div>
              <div className="text-green-700 font-semibold">実質負担額 66%削減</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}