import { Product } from './types';

export const products: Product[] = [
  // Women's Products
  {
    id: 'w1',
    name: 'Elegant Floral Dress',
    price: 45.99,
    category: 'women',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80'
    ],
    description: 'Trendy high-waist jeans with stretch comfort. Flattering fit for all body types.',
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    sizes: ['24', '26', '28', '30', '32'],
  },
  {
    id: 'w4',
    name: 'Cozy Knit Sweater',
    price: 39.99,
    category: 'women',
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80'
    ],
    description: 'Modern slim fit chinos with stretch. Versatile and comfortable.',
    colors: ['Khaki', 'Navy', 'Black'],
    sizes: ['30', '32', '34', '36', '38'],
  },
  {
    id: 'm3',
    name: 'Casual Denim Jacket',
    price: 65.99,
    category: 'men',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80'
    ],
    description: 'Classic denim jacket with modern cut. Essential wardrobe piece.',
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'm4',
    name: 'Crew Neck T-Shirt',
    price: 24.99,
    category: 'men',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80'
    ],
    description: 'Timeless sunglasses with UV protection. Stylish and protective.',
    colors: ['Black', 'Tortoiseshell', 'Gold'],
    sizes: ['One Size'],
  },
  {
    id: 'a3',
    name: 'Minimalist Watch',
    price: 89.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'
    ],
    description: 'Elegant minimalist watch with leather strap. Perfect for any outfit.',
    colors: ['Silver', 'Gold', 'Rose Gold'],
    sizes: ['One Size'],
  },
  {
    id: 'a4',
    name: 'Silk Scarf',
    price: 34.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80'
    ],
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
