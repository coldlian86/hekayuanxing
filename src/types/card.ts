export interface CardStyle {
  titleFont: string;
  messageFont: string;
  signatureFont: string;
  titleColor: string;
  messageColor: string;
  signatureColor: string;
  decorations: string[];
}

export interface CardTemplate {
  id: number;
  title: string;
  category: string;
  background: string;
  image: string;
  style: CardStyle;
}

export interface CardData {
  recipient: string;
  message: string;
  signature: string;
}