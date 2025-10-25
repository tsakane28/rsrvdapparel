import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getFeaturedProducts } from '@/lib/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground">Handpicked pieces just for you</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground mb-8">Find exactly what you're looking for</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/women" className="group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                    Women
                  </span>
                </div>
              </a>
              
              <a href="/men" className="group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                    Men
                  </span>
                </div>
              </a>
              
              <a href="/accessories" className="group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                    Accessories
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
