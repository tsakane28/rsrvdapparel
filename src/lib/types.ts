export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'women' | 'men' | 'accessories';
  images: string[];
  description: string;
  colors: string[];
  sizes: string[];
  featured?: boolean;
}
