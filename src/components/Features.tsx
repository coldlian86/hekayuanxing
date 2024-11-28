import React from 'react';
import { Sparkles, Share2, Download } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: '精美模板',
    description: '多款专业设计模板供您选择'
  },
  {
    icon: Share2,
    title: '便捷分享',
    description: '一键分享给亲朋好友'
  },
  {
    icon: Download,
    title: '下载打印',
    description: '高清图片质量随时下载打印'
  }
];

export default function Features() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}