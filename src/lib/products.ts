import { Product } from './types';

export const products: Product[] = [
  // Women's Products
  {
    id: 'w1',
    name: 'Elegant Floral Dress',
    price: 45.99,
    category: 'women',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Beautiful floral print dress perfect for any occasion. Lightweight and comfortable fabric.',
    colors: ['Pink', 'Blue', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'w2',
    name: 'Classic White Blouse',
    price: 32.99,
    category: 'women',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Timeless white blouse with elegant button details. Perfect for office or casual wear.',
    colors: ['White', 'Cream', 'Light Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'w3',
    name: 'High-Waist Denim Jeans',
    price: 54.99,
    category: 'women',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Trendy high-waist jeans with stretch comfort. Flattering fit for all body types.',
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    sizes: ['24', '26', '28', '30', '32'],
  },
  {
    id: 'w4',
    name: 'Cozy Knit Sweater',
    price: 39.99,
    category: 'women',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Soft knit sweater perfect for layering. Warm and stylish.',
    colors: ['Beige', 'Pink', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  // Men's Products
  {
    id: 'm1',
    name: 'Classic Oxford Shirt',
    price: 42.99,
    category: 'men',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Premium cotton oxford shirt. Timeless style for any occasion.',
    colors: ['White', 'Blue', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 'm2',
    name: 'Slim Fit Chinos',
    price: 49.99,
    category: 'men',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Modern slim fit chinos with stretch. Versatile and comfortable.',
    colors: ['Khaki', 'Navy', 'Black'],
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'm3',
    name: 'Casual Denim Jacket',
    price: 65.99,
    category: 'men',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Classic denim jacket with modern cut. Essential wardrobe piece.',
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'm4',
    name: 'Crew Neck T-Shirt',
    price: 24.99,
    category: 'men',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Premium cotton crew neck tee. Soft, breathable, and durable.',
    colors: ['White', 'Black', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  // Accessories
  {
    id: 'a1',
    name: 'Leather Crossbody Bag',
    price: 79.99,
    category: 'accessories',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Genuine leather crossbody bag with adjustable strap. Perfect size for daily essentials.',
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size'],
    featured: true,
  },
  {
    id: 'a2',
    name: 'Classic Sunglasses',
    price: 29.99,
    category: 'accessories',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Timeless sunglasses with UV protection. Stylish and protective.',
    colors: ['Black', 'Tortoiseshell', 'Gold'],
    sizes: ['One Size'],
  },
  {
    id: 'a3',
    name: 'Minimalist Watch',
    price: 89.99,
    category: 'accessories',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Elegant minimalist watch with leather strap. Perfect for any outfit.',
    colors: ['Silver', 'Gold', 'Rose Gold'],
    sizes: ['One Size'],
  },
  {
    id: 'a4',
    name: 'Silk Scarf',
    price: 34.99,
    category: 'accessories',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Luxurious silk scarf with beautiful patterns. Versatile styling piece.',
    colors: ['Floral', 'Geometric', 'Abstract'],
    sizes: ['One Size'],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'women' | 'men' | 'accessories'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
