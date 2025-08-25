'use client';
import React, { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productCategory: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJSを使ってメール送信
    const emailData = {
      to_email: 'fomus.official@gmail.com',
      from_name: formData.contactName,
      company_name: formData.companyName,
      contact_name: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      product_category: formData.productCategory,
      notes: formData.notes,
      message: `
会社名: ${formData.companyName}
担当者名: ${formData.contactName}
メールアドレス: ${formData.email}
電話番号: ${formData.phone}
商品ジャンル: ${formData.productCategory}
備考: ${formData.notes}
      `
    };

    try {
      // メール送信のシミュレーション（実際のEmailJS設定が必要）
      console.log('Sending email to fomus.official@gmail.com:', emailData);
      
      // 実際のEmailJS呼び出しの場合：
      // await emailjs.send('service_id', 'template_id', emailData, 'public_key');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-blue-900 py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white rounded-lg p-8">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お申込みありがとうございました
            </h2>
            <p className="text-gray-700">
              2営業日以内に担当者よりご連絡いたします。<br />
              まずは無料カタログの制作から始めさせていただきます。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-blue-900 py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          まずはお気軽にご相談ください
        </h2>
        <div className="bg-white rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  担当者名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-2">
                商品ジャンル <span className="text-red-500">*</span>
              </label>
              <select
                id="productCategory"
                name="productCategory"
                required
                value={formData.productCategory}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="sake">日本酒</option>
                <option value="craft">工芸品</option>
                <option value="food">食品</option>
                <option value="tea">茶</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                備考
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="ご質問やご要望があればお聞かせください"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              無料相談する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}