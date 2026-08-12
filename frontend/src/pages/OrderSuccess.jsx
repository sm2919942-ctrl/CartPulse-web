import {
  CheckCircle,
  Package
} from "lucide-react";

import {
  Link,
  useParams
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function OrderSuccess() {
  const { id } = useParams();

  return (
    <>
      <Header />

      <main className="order-success-page">

        <div className="order-success-card">

          <CheckCircle size={65} />

          <p className="success-tag">
            ORDER CONFIRMED
          </p>

          <h1>
            Thank You For Your Order
          </h1>

          <p>
            Your CartPulse order has been
            successfully placed.
          </p>

          <div className="order-id-box">
            Order ID
            <strong>{id}</strong>
          </div>

          <div className="success-buttons">

            <Link to="/orders">
              <Package size={16} />
              View My Orders
            </Link>

            <Link to="/">
              Continue Shopping
            </Link>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default OrderSuccess;