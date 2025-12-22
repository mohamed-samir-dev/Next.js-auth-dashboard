export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  colors: string[];
  category: string;
}

export interface ProductGridProps {
  products: Product[];
}