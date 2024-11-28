import React from 'react';

interface CallToActionProps {
  onStart: () => void;
}

export default function CallToAction({ onStart }: CallToActionProps) {
  return (
    <div className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">准备制作您的祝福卡片？</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          加入千万用户的行列，创作并分享您的祝福
        </p>
        <button 
          onClick={onStart}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          免费开始使用
        </button>
      </div>
    </div>
  );
}