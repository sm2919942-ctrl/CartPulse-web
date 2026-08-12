import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Package,
  CalendarDays
} from "lucide-react";

import { Link } from "react-router-dom";

function Orders() {
  const user =
    JSON.parse(
      localStorage.getItem("cartpulseUser")
    );

  const allOrders =
    JSON.parse(
      localStorage.getItem("cartpulseOrders")
    ) || [];

  const orders = allOrders.filter(
    (order) =>
      !user ||
      order.userEmail === user.email ||
      order.userEmail === "guest"
  );

  return (
    <>
      <Header />

      <main className="simple-dashboard-page">

        <p className="page-tag">
          PURCHASE HISTORY
        </p>

        <h1>My Orders</h1>

        {orders.length === 0 ? (

          <div className="empty-dashboard-box">

            <Package size={45} />

            <h2>No orders yet</h2>

            <p>
              Your CartPulse orders
              will appear here.
            </p>

            <Link to="/">
              Start Shopping
            </Link>

          </div>

        ) : (

          <div className="orders-list">

            {orders.map((order) => (

              <div
                className="order-card"
                key={order.id}
              >

                <div className="order-card-header">

                  <div>
                    <span>ORDER ID</span>
                    <strong>{order.id}</strong>
                  </div>

                  <div className="order-status">
                    {order.status}
                  </div>

                </div>

                <div className="order-products">

                  {order.items.map((item) => (

                    <div
                      className="order-product"
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
                          Quantity:
                          {" "}
                          {item.quantity}
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

                <div className="order-footer">

                  <span>
                    <CalendarDays size={14} />
                    {order.date}
                  </span>

                  <span>
                    Payment:
                    {" "}
                    {order.paymentMethod}
                  </span>

                  <strong>
                    Total ₹
                    {order.total.toLocaleString()}
                  </strong>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Orders;