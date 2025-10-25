import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: 'women' | 'men' | 'accessories' }>();
  const products = getProductsByCategory(category as 'women' | 'men' | 'accessories');

  const categoryTitles = {
    women: "Women's Collection",
    men: "Men's Collection",
    accessories: 'Accessories',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {categoryTitles[category as keyof typeof categoryTitles]}
          </h1>
          <p className="text-muted-foreground">
            {products.length} products available
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
