import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

function Home() {
  const categories = [
    { name: "Luxury Watches", icon: "⌚" },
    { name: "Premium Audio", icon: "🎧" },
    { name: "Fashion", icon: "🧥" },
    { name: "Smart Gadgets", icon: "📱" },
    { name: "Home Decor", icon: "🛋️" },
    { name: "Beauty", icon: "✨" }
  ];

  const brands = [
    "APPLE",
    "SAMSUNG",
    "SONY",
    "NIKE",
    "ADIDAS",
    "PUMA"
  ];
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <CategoryBar />

      <main>
        <HeroBanner />

        <section className="luxury-category-section">
          <div className="section-heading">
            <div>
              <p>SHOP BY STYLE</p>
              <h2>Premium Categories</h2>
            </div>
          </div>

          <div className="luxury-category-grid">
            {categories.map((category, index) => (
              <div className="luxury-category-card" key={index}>
                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>{category.name}</h3>
                <span>Explore Collection →</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p>CURATED FOR YOU</p>
              <h2>Signature Collection</h2>
            </div>

    <button
  onClick={() => navigate("/products")}
>
  Explore All →
</button>
          </div>

          <div className="product-grid">
           {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        <section className="exclusive-banner">
          <div>
            <p>MEMBERS EXCLUSIVE</p>

            <h2>
              Elevate Your Lifestyle
            </h2>

            <span>
              Handpicked premium products,
              exclusive offers and luxury experiences.
            </span>

            <button>
              Discover Collection
            </button>
          </div>

          <div className="exclusive-number">
            40%
            <span>OFF</span>
          </div>
        </section>

        <section className="brands-section">
          <div className="section-heading">
            <div>
              <p>PREMIUM PARTNERS</p>
              <h2>Top Brands</h2>
            </div>
          </div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div className="brand-card" key={index}>
                {brand}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;