import React from 'react';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <div className="container mx-auto px-4 pt-20 pb-32">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Heart className="text-purple-600 w-8 h-8 mr-2" />
          <Sparkles className="text-purple-600 w-8 h-8" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          制作暖心祝福卡片
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          几分钟内即可设计精美的个性化祝福卡片，
          即时分享或下载保存，传递您的真挚祝福。
        </p>
        <button 
          onClick={onStart}
          className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center mx-auto"
        >
          开始制作
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}