import React from 'react';

export default function Problem() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          海外展開に挑戦したいけど…
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          こんなお悩みありませんか？
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">💸</div>
            <p className="text-gray-700 font-medium">
              翻訳やデザインにコストがかかる
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🌐</div>
            <p className="text-gray-700 font-medium">
              海外サイトや接客体制を整えるのが難しい
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">😰</div>
            <p className="text-gray-700 font-medium">
              海外から問い合わせが来ても英語で説明できない
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}