import {
  useEffect,
  useMemo,
  useState
} from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import {
  getProducts
} from "../api/productApi";


function Products() {
    const [products, setProducts] =
  useState([]);

const [loading, setLoading] =
  useState(true);

const [demoMode, setDemoMode] =
  useState(false);
  useEffect(() => {

  async function loadProducts() {

    const result =
      await getProducts();

    setProducts(result.products);

    setDemoMode(result.demoMode);

    setLoading(false);
  }

  loadProducts();

}, []);
  const [searchParams] = useSearchParams();

const querySearch =
  searchParams.get("search") || "";

  const initialCategory =
    searchParams.get("category") || "All";

  const [search, setSearch] = useState(querySearch);
  const [category, setCategory] =
    useState(initialCategory);
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category))
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) => {
  const keyword = search.toLowerCase();

  return (
    product.name
      .toLowerCase()
      .includes(keyword) ||
    product.category
      .toLowerCase()
      .includes(keyword)
  );
});
    }

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }


    return result;
  }, [search, category, sort]);
  if (loading) {
  return (
    <>
      <Header />

      <main className="products-page">
        <div className="loading-products">
          Loading premium collection...
        </div>
      </main>
      {demoMode && (
  <span className="demo-mode-label">
    Portfolio Demo Mode
  </span>
)}

      <Footer />
    </>
  );
}

  return (
    <>
      <Header />

      <main className="products-page">

        <div className="products-page-heading">
          <p>DISCOVER CARTPULSE</p>

          <h1>Premium Collection</h1>

          <span>
            Explore curated products across
            fashion, electronics and lifestyle.
          </span>
        </div>

        <div className="products-toolbar">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="default">
              Sort By
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rating
            </option>
          </select>

        </div>

        <div className="products-result-bar">
          <span>
            {filteredProducts.length} products found
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            No products found.
          </div>
        ) : (
          <div className="products-main-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}

export default Products;