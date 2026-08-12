import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Header />

      <main className="simple-dashboard-page">
        <p className="page-tag">
          YOUR FAVOURITES
        </p>

        <h1>Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="empty-dashboard-box">
            <Heart size={45} />

            <h2>
              Your wishlist is empty
            </h2>

            <p>
              Save your favourite premium
              products here.
            </p>

            <Link to="/">
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="wishlist-products">
            {wishlist.map((product) => (
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

export default Wishlist;