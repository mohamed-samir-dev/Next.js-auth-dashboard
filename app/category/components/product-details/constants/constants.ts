import { Color, Thumbnail, TypePrices } from "../types/types";

export const typePrices: TypePrices = {
  cotton: 300.0,
  polyester: 280.0,
  "cotton-blend": 290.0,
  linen: 320.0,
  silk: 450.0,
};

export const sizePriceMultipliers: Record<string, number> = {
  xs: 0.9,
  s: 0.95,
  m: 1.0,
  l: 1.05,
  xl: 1.1,
  "2xl": 1.15,
  "3xl": 1.2,
};

export const colors: Color[] = [
  { name: "blue", label: "Blue", hex: "#87CEEB" },
  { name: "red", label: "Red", hex: "#FF6B6B" },
  { name: "white", label: "White", hex: "#FFFFFF" },
  { name: "black", label: "Black", hex: "#000000" },
  { name: "brown", label: "Brown", hex: "#964B00" },
];

export const thumbnails: Thumbnail[] = [
  { color: "blue", src: "/blueshirt.webp" },
  { color: "red", src: "/redtshirt.webp" },
  { color: "white", src: "/whiteshirt.webp" },
  { color: "black", src: "/blackshirt.webp" },
  { color: "brown", src: "/brownshirt.webp" },
];
