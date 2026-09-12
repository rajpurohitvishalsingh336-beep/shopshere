import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Checkout({ cart, onPlaceOrder }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = subtotal >= 999 ? 0 : 99;
  const total = subtotal + delivery;
  const itemCount = cart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPlaceOrder({
      id: `SS-${Date.now().toString().slice(-6)}`,
      customer: form,
      itemCount,
      total
    });
    navigate("/order-success");
  };

  return (
    <main className="page">
      <div className="container">
        <div className="page-header checkout-header">
          <span className="eyebrow">SECURE CHECKOUT</span>
          <h1>Complete your order</h1>
          <p>Enter your delivery details and we will prepare your order.</p>
        </div>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Delivery details</h2>

            <label>
              Full name
              <input name="name" value={form.name} onChange={updateField} required />
            </label>

            <label>
              Email address
              <input type="email" name="email" value={form.email} onChange={updateField} required />
            </label>

            <label>
              Delivery address
              <textarea name="address" value={form.address} onChange={updateField} rows="3" required />
            </label>

            <div className="checkout-fields-row">
              <label>
                City
                <input name="city" value={form.city} onChange={updateField} required />
              </label>

              <label>
                Postal code
                <input name="postalCode" inputMode="numeric" value={form.postalCode} onChange={updateField} required />
              </label>
            </div>

            <button className="checkout-button" type="submit">
              Place order · ₹{total.toLocaleString("en-IN")}
            </button>
            <Link className="continue-shopping" to="/cart">← Return to cart</Link>
          </form>

          <aside className="summary checkout-summary">
            <h2>Your order</h2>
            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <span>{item.name} × {item.quantity}</span>
                <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
              </div>
            ))}
            <div className="summary-divider" />
            <div className="summary-row">
              <span>Delivery</span>
              <strong>{delivery === 0 ? "FREE" : `₹${delivery}`}</strong>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
