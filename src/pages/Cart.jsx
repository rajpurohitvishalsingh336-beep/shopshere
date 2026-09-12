import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove
}) {

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery =
    subtotal >= 999 || subtotal === 0
      ? 0
      : 99;

  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <main className="page">

        <div className="container">

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h1>
              Your cart is empty
            </h1>

            <p>
              Looks like you haven't added
              anything to your cart yet.
            </p>

            <Link
              to="/products"
              className="primary-button"
            >
              Start Shopping →
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="page">

      <div className="container">

        <div className="page-header cart-header">

          <span className="eyebrow">
            YOUR SHOPPING BAG
          </span>

          <h1>
            Shopping Cart
          </h1>

          <p>
            {cart.length} item(s) in your cart
          </p>

        </div>

        <div className="cart-layout">

          <div className="cart-list">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}

            <Link
              to="/products"
              className="continue-shopping"
            >
              ← Continue Shopping
            </Link>

          </div>

          <aside className="summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                ₹{subtotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>

              <strong>
                {delivery === 0
                  ? "FREE"
                  : `₹${delivery}`}
              </strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">

              <span>
                Total
              </span>

              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>

            </div>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout →
            </Link>

            <p className="secure-text">
              🔒 Secure & protected checkout
            </p>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default Cart;