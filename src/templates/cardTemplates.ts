import { CardTemplate } from '../types/card';

export const cardTemplates: CardTemplate[] = [
  {
    id: 1,
    title: "生日祝福",
    category: "birthday",
    background: "linear-gradient(45deg, #FFE4E1, #FFF0F5)",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400&h=300",
    style: {
      titleFont: 'bold 48px "SF Pro Display", sans-serif',
      messageFont: '32px "SF Pro Text", sans-serif',
      signatureFont: 'italic 36px "SF Pro Display", sans-serif',
      titleColor: '#2C3E50',
      messageColor: '#34495E',
      signatureColor: '#2C3E50',
      decorations: ['balloons', 'confetti']
    }
  },
  {
    id: 2,
    title: "周年纪念",
    category: "anniversary",
    background: "linear-gradient(135deg, #E0FFFF, #F0FFFF)",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400&h=300",
    style: {
      titleFont: 'bold 48px "SF Pro Display", sans-serif',
      messageFont: '32px "SF Pro Text", sans-serif',
      signatureFont: 'italic 36px "SF Pro Display", sans-serif',
      titleColor: '#1A5F7A',
      messageColor: '#2C7873',
      signatureColor: '#1A5F7A',
      decorations: ['flowers', 'rings']
    }
  },
  {
    id: 3,
    title: "节日问候",
    category: "holiday",
    background: "linear-gradient(180deg, #F5F5F5, #FFFFFF)",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=400&h=300",
    style: {
      titleFont: 'bold 48px "SF Pro Display", sans-serif',
      messageFont: '32px "SF Pro Text", sans-serif',
      signatureFont: 'italic 36px "SF Pro Display", sans-serif',
      titleColor: '#C23B22',
      messageColor: '#D35400',
      signatureColor: '#C23B22',
      decorations: ['lanterns', 'clouds']
    }
  }
];