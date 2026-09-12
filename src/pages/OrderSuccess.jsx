import { Link, Navigate } from "react-router-dom";

function OrderSuccess({ order }) {
  if (!order) {
    return <Navigate to="/products" replace />;
  }

  return (
    <main className="page">
      <div className="container">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <span className="eyebrow">ORDER CONFIRMED</span>
          <h1>Thank you, {order.customer.name}!</h1>
          <p>Your order has been placed successfully. We will send updates to {order.customer.email}.</p>

          <div className="order-details">
            <div>
              <span>Order number</span>
              <strong>{order.id}</strong>
            </div>
            <div>
              <span>Items</span>
              <strong>{order.itemCount}</strong>
            </div>
            <div>
              <span>Total paid</span>
              <strong>₹{order.total.toLocaleString("en-IN")}</strong>
            </div>
          </div>

          <Link className="primary-button" to="/products">Continue Shopping →</Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;
