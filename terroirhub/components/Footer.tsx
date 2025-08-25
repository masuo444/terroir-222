import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TerroirHub</h3>
            <p className="text-gray-300">
              日本のものづくりを世界へ
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">提供会社</h4>
            <p className="text-gray-300">合同会社FOMUS</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-300">info@fomus.jp</p>
            <p className="text-gray-300">03-1234-5678</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                本サービスはIT導入補助金対象ツールです
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                会社概要
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              © 2024 合同会社FOMUS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}