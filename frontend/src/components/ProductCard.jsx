import {
  ShoppingBag,
  Heart
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted
  } = useWishlist();

  const wished = isWishlisted(product.id);

  const openProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      className="product-card"
      onClick={openProduct}
    >
      <button
        className={
          wished
            ? "wishlist-btn wishlisted"
            : "wishlist-btn"
        }
        onClick={handleWishlist}
      >
        <Heart
          size={17}
          fill={wished ? "currentColor" : "none"}
        />
      </button>

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <span className="rating">
          ★ {product.rating}
        </span>

        <div className="price">
          <span className="current-price">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="old-price">
            ₹{product.oldPrice.toLocaleString()}
          </span>

          <span className="discount">
            {product.discount}
          </span>
        </div>

        <button
          className="add-cart"
          onClick={handleCart}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;