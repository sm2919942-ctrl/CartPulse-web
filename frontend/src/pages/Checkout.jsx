import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";
import { createOrder } from "../api/orderApi";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    clearCart
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "COD"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.mobile ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode
    ) {
      setMessage("Please fill all delivery details.");
      return;
    }

    if (cart.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("cartpulseUser")
    );

    const orderData = {
      userEmail:
        user?.email || "guest@cartpulse.demo",

      totalAmount: cartTotal,

      paymentMethod: form.paymentMethod,

      customerName: form.name,

      mobile: form.mobile,

      address: form.address,

      city: form.city,

      state: form.state,

      pincode: form.pincode,

      items: cart.map((item) => ({
        productId: item.id,
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }))
    };

    try {
      setMessage("Placing your order...");

      const result = await createOrder(orderData);

      const orderId =
        result.order.orderNumber ||
        result.order.id;

      clearCart();

      navigate(`/order-success/${orderId}`);
    } catch (error) {
      console.error(error);

      setMessage(
        "Unable to place order. Please try again."
      );
    }
  };

  return (
    <>
      <Header />

      <main className="checkout-page">

        <div className="checkout-title">
          <p>SECURE CHECKOUT</p>
          <h1>Complete Your Order</h1>
        </div>

        <form
          className="checkout-layout"
          onSubmit={placeOrder}
        >

          <div className="checkout-form-card">

            <h2>Delivery Information</h2>

            <div className="form-row">

              <div className="form-group">
                <label>Full Name</label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>

                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Full Address</label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="House no, street, area"
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>City</label>

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="City"
                />
              </div>

              <div className="form-group">
                <label>State</label>

                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  type="text"
                  placeholder="State"
                />
              </div>

            </div>

            <div className="form-group">
              <label>PIN Code</label>

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                type="text"
                placeholder="PIN Code"
              />
            </div>

            <div className="payment-section">

              <h2>Payment Method</h2>

              <label className="payment-option">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={
                    form.paymentMethod === "COD"
                  }
                  onChange={handleChange}
                />

                <div>
                  <strong>
                    Cash on Delivery
                  </strong>

                  <span>
                    Pay when your order arrives
                  </span>
                </div>

              </label>

              <label className="payment-option">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  checked={
                    form.paymentMethod === "UPI"
                  }
                  onChange={handleChange}
                />

                <div>
                  <strong>UPI Demo</strong>

                  <span>
                    Demo payment option
                  </span>
                </div>

              </label>

            </div>

            {message && (
              <p className="checkout-message">
                {message}
              </p>
            )}

          </div>

          <div className="checkout-summary">

            <p>ORDER SUMMARY</p>

            <h2>
              {cart.length} Item
              {cart.length !== 1 ? "s" : ""}
            </h2>

            <div className="checkout-items">

              {cart.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      Qty: {item.quantity}
                    </span>

                  </div>

                  <b>
                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </b>

                </div>

              ))}

            </div>

            <div className="checkout-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{cartTotal.toLocaleString()}
              </strong>

            </div>

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </div>

        </form>

      </main>

      <Footer />
    </>
  );
}

export default Checkout;