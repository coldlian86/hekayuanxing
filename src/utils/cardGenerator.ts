import { CardTemplate, CardData } from '../types/card';

function drawDecoration(
  ctx: CanvasRenderingContext2D,
  decoration: string,
  x: number,
  y: number
) {
  switch (decoration) {
    case 'balloons':
      drawBalloons(ctx, x, y);
      break;
    case 'confetti':
      drawConfetti(ctx);
      break;
    case 'flowers':
      drawFlowers(ctx, x, y);
      break;
    case 'rings':
      drawRings(ctx, x, y);
      break;
    case 'lanterns':
      drawLanterns(ctx, x, y);
      break;
    case 'clouds':
      drawClouds(ctx, x, y);
      break;
  }
}

function drawBalloons(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
  colors.forEach((color, i) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x + i * 30, y - i * 10, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.moveTo(x + i * 30, y - i * 10 + 20);
    ctx.lineTo(x + 15, y + 40);
    ctx.stroke();
  });
}

function drawConfetti(ctx: CanvasRenderingContext2D) {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFE66D'];
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 5, 5);
  }
}

function drawFlowers(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const colors = ['#FF9999', '#FFB366', '#FF99CC'];
  colors.forEach((color, i) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    for (let j = 0; j < 5; j++) {
      const angle = (j * 2 * Math.PI) / 5;
      const px = x + i * 50 + Math.cos(angle) * 15;
      const py = y + Math.sin(angle) * 15;
      ctx.ellipse(px, py, 10, 5, angle, 0, Math.PI * 2);
    }
    ctx.fill();
  });
}

function drawRings(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(x + 25, y, 15, 0, Math.PI * 2);
  ctx.stroke();
}

function drawLanterns(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const colors = ['#FF4D4D', '#FFD700'];
  colors.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x + i * 60, y, 20, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + i * 60, y - 25);
    ctx.lineTo(x + i * 60, y + 25);
    ctx.stroke();
  });
}

function drawClouds(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 15, y - 10, 15, 0, Math.PI * 2);
  ctx.arc(x + 30, y, 20, 0, Math.PI * 2);
  ctx.fill();
}

export function generateCardPreview(
  ctx: CanvasRenderingContext2D,
  formData: CardData,
  template: CardTemplate
) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Draw background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  const bgColors = template.background.match(/\#[a-fA-F0-9]{6}/g) || ['#FFE4E1', '#FFF0F5'];
  gradient.addColorStop(0, bgColors[0]);
  gradient.addColorStop(1, bgColors[1]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Draw decorations
  if (template.style.decorations) {
    template.style.decorations.forEach((decoration, index) => {
      const x = width * (0.2 + index * 0.3);
      const y = height * 0.2;
      drawDecoration(ctx, decoration, x, y);
    });
  }

  // Draw recipient
  ctx.font = template.style.titleFont;
  ctx.fillStyle = template.style.titleColor;
  ctx.textAlign = 'center';
  ctx.fillText(`致: ${formData.recipient}`, width / 2, height * 0.3);

  // Draw message
  ctx.font = template.style.messageFont;
  ctx.fillStyle = template.style.messageColor;
  const lines = formData.message.split('\n');
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, height * (0.45 + index * 0.08));
  });

  // Draw signature
  ctx.font = template.style.signatureFont;
  ctx.fillStyle = template.style.signatureColor;
  ctx.fillText(formData.signature, width / 2, height * 0.8);
}

export function downloadCard(canvas: HTMLCanvasElement) {
  const link = document.createElement('a');
  link.download = '祝福卡片.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}