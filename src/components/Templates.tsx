import React, { useState } from 'react';
import { CardTemplate } from '../types/card';
import { cardTemplates } from '../templates/cardTemplates';

interface TemplatesProps {
  onSelectTemplate: (template: CardTemplate) => void;
}

const categories = [
  { id: 'birthday', name: '生日' },
  { id: 'anniversary', name: '纪念日' },
  { id: 'holiday', name: '节日' }
];

export default function Templates({ onSelectTemplate }: TemplatesProps) {
  const [activeTab, setActiveTab] = useState('birthday');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">热门模板</h2>
        
        <div className="flex justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 mx-2 rounded-full ${
                activeTab === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardTemplates
            .filter((template) => template.category === activeTab)
            .map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div 
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${template.image})`,
                    backgroundBlendMode: 'soft-light',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{template.title}</h3>
                  <button 
                    onClick={() => onSelectTemplate(template)}
                    className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    使用模板
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}