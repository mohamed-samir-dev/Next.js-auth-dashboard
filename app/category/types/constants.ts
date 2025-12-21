import { Color, Thumbnail, TypePrices } from './types';

export const typePrices: TypePrices = {
  cotton: 300.00,
  polyester: 280.00,
  'cotton-blend': 290.00,
  linen: 320.00,
  silk: 450.00
};

export const colors: Color[] = [
  { name: 'blue', label: 'Blue', hex: '#87CEEB' },
  { name: 'red', label: 'Red', hex: '#FF6B6B' },
  { name: 'white', label: 'White', hex: '#FFFFFF' },
  { name: 'black', label: 'Black', hex: '#000000' },  
  { name: 'brown', label: 'Brown', hex: '#964B00' }
];

export const thumbnails: Thumbnail[] = [
  { color: 'blue', src: '/481bdbb752097f2110b43983b0269f31d9258d1b(1).png' },
  { color: 'red', src: '/78f54d790f6d51421ee4111670b58877eefa55c3(1).png' },
  { color: 'white', src: '/d15796154d129d781c7b11d8555ae4315a94e256.png' },
  { color: 'black', src: '/ChatGPT Image Dec 21, 2025, 09_20_07 PM.png' },
  { color: 'brown', src: '/ChatGPT Image Dec 21, 2025, 09_20_57 PM.png' }
];
