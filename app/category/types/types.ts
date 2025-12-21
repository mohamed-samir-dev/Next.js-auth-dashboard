export interface Color {
  name: string;
  label: string;
  hex: string;
}

export interface Thumbnail {
  color: string;
  src: string;
}

export type TypePrices = Record<string, number>;
