const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 7999,
    oldPrice: 10999,
    discount: "27% OFF",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Classic Luxury Watch",
    category: "Fashion",
    price: 6499,
    oldPrice: 8999,
    discount: "28% OFF",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500"
  },
  {
    id: 3,
    name: "Premium Leather Backpack",
    category: "Fashion",
    price: 3999,
    oldPrice: 5499,
    discount: "27% OFF",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 4999,
    oldPrice: 6999,
    discount: "29% OFF",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
  id: 5,
  name: "Wireless Gaming Headset",
  category: "Electronics",
  price: 3499,
  oldPrice: 4999,
  discount: "30% OFF",
  rating: 4.4,
  image:
    "https://images.unsplash.com/photo-1599669454699-248893623440?w=500"
},
{
  id: 6,
  name: "Premium Running Shoes",
  category: "Fashion",
  price: 4299,
  oldPrice: 5999,
  discount: "28% OFF",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},
{
  id: 7,
  name: "Luxury Perfume",
  category: "Beauty",
  price: 2899,
  oldPrice: 3999,
  discount: "27% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
},
{
  id: 8,
  name: "Modern Table Lamp",
  category: "Home & Furniture",
  price: 2199,
  oldPrice: 2999,
  discount: "26% OFF",
  rating: 4.3,
  image:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
},
{
  id: 9,
  name: "Premium Mechanical Keyboard",
  category: "Electronics",
  price: 5899,
  oldPrice: 7999,
  discount: "26% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
},
{
  id: 10,
  name: "Designer Leather Handbag",
  category: "Fashion",
  price: 6999,
  oldPrice: 9499,
  discount: "26% OFF",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
},
{
  id: 11,
  name: "Luxury Sunglasses",
  category: "Fashion",
  price: 3299,
  oldPrice: 4499,
  discount: "27% OFF",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
},
{
  id: 12,
  name: "Premium Espresso Coffee Machine",
  category: "Appliances",
  price: 12999,
  oldPrice: 16999,
  discount: "24% OFF",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500"
},
{
  id: 13,
  name: "Luxury Skincare Gift Set",
  category: "Beauty",
  price: 4599,
  oldPrice: 6199,
  discount: "26% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500"
},
{
  id: 14,
  name: "Premium Lounge Chair",
  category: "Home & Furniture",
  price: 11999,
  oldPrice: 15999,
  discount: "25% OFF",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500"
},
{
  id: 15,
  name: "Smart Home Speaker",
  category: "Electronics",
  price: 7499,
  oldPrice: 9999,
  discount: "25% OFF",
  rating: 4.5,
  image:
    "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500"
},
{
  id: 16,
  name: "Premium Travel Trolley",
  category: "Fashion",
  price: 8499,
  oldPrice: 10999,
  discount: "23% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500"
},
{
  id: 17,
  name: "Luxury Aroma Diffuser",
  category: "Home & Furniture",
  price: 2499,
  oldPrice: 3499,
  discount: "29% OFF",
  rating: 4.5,
  image:
    "https://images.unsplash.com/photo-1602874801006-e26c8a0f6bd8?w=500"
},
{
  id: 18,
  name: "Premium Grooming Kit",
  category: "Beauty",
  price: 3799,
  oldPrice: 5199,
  discount: "27% OFF",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500"
},
{
  id: 19,
  name: "The Psychology of Money – Premium Edition",
  category: "Books",
  price: 599,
  oldPrice: 899,
  discount: "33% OFF",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
},
{
  id: 20,
  name: "Luxury Classic Book Collection",
  category: "Books",
  price: 2499,
  oldPrice: 3499,
  discount: "29% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500"
},
{
  id: 21,
  name: "Premium Training Dumbbell Set",
  category: "Sports",
  price: 4499,
  oldPrice: 5999,
  discount: "25% OFF",
  rating: 4.6,
  image:
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500"
},
{
  id: 22,
  name: "Professional Yoga Mat",
  category: "Sports",
  price: 1899,
  oldPrice: 2699,
  discount: "30% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"
},
{
  id: 23,
  name: "Premium Organic Dry Fruit Collection",
  category: "Grocery",
  price: 1499,
  oldPrice: 1999,
  discount: "25% OFF",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1596591868231-05e7b8c3cca0?w=500"
},
{
  id: 24,
  name: "Luxury Gourmet Coffee Beans",
  category: "Grocery",
  price: 999,
  oldPrice: 1399,
  discount: "29% OFF",
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500"
}
];

  

export default products;