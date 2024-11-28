import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';
import CardPreview, { CardPreviewRef } from './CardPreview';
import { downloadCard } from '../utils/cardGenerator';
import { CardTemplate } from '../types/card';

interface CardEditorProps {
  template: CardTemplate | null;
  onClose: () => void;
}

export default function CardEditor({ template, onClose }: CardEditorProps) {
  const [formData, setFormData] = useState({
    recipient: '',
    message: '',
    signature: ''
  });
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef<CardPreviewRef>(null);

  if (!template) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleDownload = () => {
    const canvas = previewRef.current?.getCanvas();
    if (!canvas) return;
    downloadCard(canvas);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">制作祝福卡片</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                祝福对象
              </label>
              <input
                type="text"
                value={formData.recipient}
                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="请输入祝福对象的称呼"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                祝福语
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 h-32"
                placeholder="请输入您的祝福语"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                落款署名
              </label>
              <input
                type="text"
                value={formData.signature}
                onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="请输入您的署名"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              生成预览
            </button>
          </form>

          <div className="flex flex-col space-y-4">
            {showPreview && (
              <>
                <CardPreview
                  ref={previewRef}
                  formData={formData}
                  template={template}
                />
                <button
                  onClick={handleDownload}
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  下载卡片
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}