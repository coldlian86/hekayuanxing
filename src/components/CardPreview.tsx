import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { generateCardPreview } from '../utils/cardGenerator';
import { CardTemplate, CardData } from '../types/card';

interface CardPreviewProps {
  formData: CardData;
  template: CardTemplate;
}

export interface CardPreviewRef {
  getCanvas: () => HTMLCanvasElement | null;
}

const CardPreview = forwardRef<CardPreviewRef, CardPreviewProps>(({ formData, template }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => ({
    getCanvas: () => canvasRef.current
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.style.width = '100%';
    canvas.style.height = '100%';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    generateCardPreview(ctx, formData, template);
  }, [formData, template]);

  return (
    <div className="w-full aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
});

CardPreview.displayName = 'CardPreview';

export default CardPreview;