export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Watch",
    price: 199.99,
    description: "Classic timepiece with leather strap",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
    category: "Accessories"
  },
  {
    id: 2,
    name: "Handmade Pottery Set",
    price: 89.99,
    description: "Artisanal ceramic dining set",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80",
    category: "Home"
  },
  {
    id: 3,
    name: "Luxury Scented Candle",
    price: 45.00,
    description: "Premium aromatherapy candle",
    image: "https://images.unsplash.com/photo-1602874801007-aa87920646cc?w=500&q=80",
    category: "Home"
  },
  {
    id: 4,
    name: "Leather Journal",
    price: 35.99,
    description: "Handcrafted leather notebook",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
    category: "Stationery"
  },
  {
    id: 5,
    name: "Gourmet Chocolate Box",
    price: 29.99,
    description: "Assorted premium chocolates",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80",
    category: "Food"
  },
  {
    id: 6,
    name: "Crystal Wine Glasses",
    price: 79.99,
    description: "Set of 4 elegant wine glasses",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
    category: "Home"
  }
];