import { Link } from 'react-router-dom';
import { Product } from '@/lib/types';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
