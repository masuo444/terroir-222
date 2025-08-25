'use client';
import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '補助金は誰が受け取りますか？',
      answer: 'お客様の口座に交付されます。FOMUSには納品後に全額お支払い頂きます。'
    },
    {
      question: '納期はどれくらいですか？',
      answer: '要件確定後、最短1ヶ月です。'
    },
    {
      question: '修正はどうなりますか？',
      answer: '1回1万円で承ります。'
    },
    {
      question: 'どのような商品に対応していますか？',
      answer: '日本酒、工芸品、食品など、日本の伝統的な商品を中心に幅広く対応しております。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          よくあるご質問
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-gray-900">
                  Q. {faq.question}
                </h3>
                <span className="text-blue-900 font-bold text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 border-l-4 border-blue-900 pl-4">
                    A. {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}