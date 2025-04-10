import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from '../data/products';
import type { Product as ProductType } from '../types';

interface ProductListProps {
  searchTerm: string;
}

export default function ProductList({ searchTerm }: ProductListProps) {
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Discover Unique Gifts</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <Link to={`/product/${product.id}`}>
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg hover:opacity-90 transition-opacity"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                <div className="mt-2">
                  <span className="text-sm font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </CardContent>
            </Link>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-semibold">${product.price}</span>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}