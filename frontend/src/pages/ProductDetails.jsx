import { useParams, Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getProductById
} from "../api/productApi";
import { useCart } from "../context/CartContext";
import {
  useEffect,
  useState
} from "react";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const [product, setProduct] =
  useState(null);

const [loading, setLoading] =
  useState(true);

  useEffect(() => {

  async function loadProduct() {

    const result =
      await getProductById(id);

    setProduct(result.product);

    setLoading(false);
  }

  loadProduct();

}, [id]);
if (loading) {
  return (
    <>
      <Header />

      <main className="product-details-page">
        <div className="loading-products">
          Loading product...
        </div>
      </main>

      <Footer />
    </>
  );
}
  if (!product) {
    return (
      <>
        <Header />

        <div className="product-not-found">
          <h2>Product not found</h2>

          <Link to="/">
            Return Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="product-details-page">

        <Link to="/" className="back-link">
          <ArrowLeft size={17} />
          Back to Collection
        </Link>

        <div className="product-details-container">

          <div className="details-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="details-content">

            <span className="details-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="details-rating">
              ★ {product.rating}
              <span> Premium Choice</span>
            </div>

            <div className="details-price">

              <strong>
                ₹{product.price.toLocaleString()}
              </strong>

              <del>
                ₹{product.oldPrice.toLocaleString()}
              </del>

              <span>
                {product.discount}
              </span>

            </div>

            <p className="product-description">
              Experience premium quality and modern
              craftsmanship with this carefully selected
              CartPulse product. Designed for customers
              who value quality, performance and style.
            </p>

            <div className="product-benefits">
              <p>✓ Premium Quality Assured</p>
              <p>✓ Free Delivery</p>
              <p>✓ 7 Day Easy Returns</p>
              <p>✓ Secure Checkout</p>
            </div>

            <button
              className="details-cart-btn"
              onClick={() => addToCart(product)}
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;