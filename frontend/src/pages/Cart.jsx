import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";


function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal
  } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="cart-page">

        <div className="cart-title">
          <p>YOUR SELECTION</p>
          <h1>Shopping Bag</h1>
        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">

            <ShoppingBag size={50} />

            <h2>Your bag is empty</h2>

            <p>
              Discover our premium collection
              and find something exceptional.
            </p>

            <Link to="/">
              Explore Collection
            </Link>

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-products">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="cart-item-info">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <strong>
                      ₹{item.price.toLocaleString()}
                    </strong>

                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        <Minus size={14} />
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        <Plus size={14} />
                      </button>

                    </div>

                  </div>

                  <div className="cart-item-right">

                    <strong>
                      ₹
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </strong>

                    <button
                      className="remove-item"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="order-summary">

              <p className="summary-label">
                ORDER SUMMARY
              </p>

              <h2>Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>

                <span>
                  ₹{cartTotal.toLocaleString()}
                </span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span className="free">
                  FREE
                </span>
              </div>

              <div className="summary-row">
                <span>Discount</span>
                <span>₹0</span>
              </div>

              <div className="summary-total">

                <span>Total</span>

                <strong>
                  ₹{cartTotal.toLocaleString()}
                </strong>

              </div>

              <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>

              <p className="secure-text">
                Secure checkout • Easy returns
              </p>

            </div>

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Cart;