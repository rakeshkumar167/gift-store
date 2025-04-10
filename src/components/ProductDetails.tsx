import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from './CartContext';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg object-cover"
            style={{ height: '500px' }}
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button variant="secondary" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <span className="inline-block mt-2 text-sm font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <div className="text-3xl font-bold">${product.price}</div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Premium quality materials</li>
                <li>Handcrafted with attention to detail</li>
                <li>Perfect for special occasions</li>
                <li>Comes in elegant gift packaging</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t">
            <Button
              size="lg"
              className="w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}