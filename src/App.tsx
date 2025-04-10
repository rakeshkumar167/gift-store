import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCart, Gift, Search, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import HomePage from './components/HomePage.tsx';
import { CartProvider, useCart } from './components/CartContext';

function Navigation({ searchTerm, setSearchTerm, cart }) {
  const { removeFromCart } = useCart();
  
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Gift className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold">GiftHub</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Search Gifts
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    {cart.length} items in your cart
                  </SheetDescription>
                </SheetHeader>
                <CartContent cart={cart} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CartContent({ cart }) {
  const { removeFromCart } = useCart();
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-8">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="ml-4">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">${item.price}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      ))}
      {cart.length > 0 ? (
        <div className="mt-4">
          <div className="flex justify-between py-4 font-medium">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      ) : (
        <p className="text-center text-muted-foreground">Your cart is empty</p>
      )}
    </div>
  );
}

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full max-w-xl mx-auto mb-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search gifts..."
            className="pl-10 py-6 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

function MainApp() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <MainApp />
      </Router>
    </CartProvider>
  );
}

export default App;