import React from 'react';

export default function Flow() {
  const steps = [
    {
      number: 1,
      title: '無料カタログ申込み',
      description: 'フォームから商品情報をお送りください'
    },
    {
      number: 2,
      title: '補助金申請サポート＋契約',
      description: '申請手続きをサポートし、契約を締結'
    },
    {
      number: 3,
      title: '制作（約4週間）',
      description: 'カタログ・サイト制作を開始'
    },
    {
      number: 4,
      title: '納品・検収 → 請求 → 補助金は後日交付',
      description: '完成後、検収いただき請求。補助金は後日お客様に交付'
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          最短1ヶ月で導入できます。
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-8 transform -translate-x-4">
                  <div className="border-t-2 border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}