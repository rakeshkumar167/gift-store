import { Link } from 'react-router-dom';
import { Gift, Heart, Package, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 1,
    name: 'For Her',
    description: 'Thoughtful gifts for the special women in your life',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80'
  },
  {
    id: 2,
    name: 'For Him',
    description: 'Perfect presents for the men who matter most',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=500&q=80'
  },
  {
    id: 3,
    name: 'Special Occasions',
    description: "Celebrate life's moments with unique gifts",
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1549465476-8c10a5d9d703?w=500&q=80'
  },
  {
    id: 4,
    name: 'Luxury Gifts',
    description: 'Premium presents for those who appreciate the finer things',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1500&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Find the Perfect Gift
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover thoughtfully curated gifts for every occasion and everyone special in your life
          </p>
          <Link to="/search">
            <Button size="lg" className="text-lg px-8">
              Explore Gifts
            </Button>
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/search?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1 block"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <div className="flex items-center text-white mb-2">
                    <Icon className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose GiftHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Curated Selection</h3>
              <p className="text-muted-foreground">Handpicked gifts that delight and inspire</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick and secure shipping worldwide</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">Only the finest gifts make it to our collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}