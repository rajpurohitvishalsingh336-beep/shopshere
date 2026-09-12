import { Link, NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <Link to="/" className="logo">
          <span className="logo-icon">S</span>
          ShopSphere
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>
        </nav>

        <Link to="/cart" className="cart-button">
          🛒
          <span>Cart</span>

          {cartCount > 0 && (
            <b className="cart-count">
              {cartCount}
            </b>
          )}
        </Link>

      </div>
    </header>
  );
}

export default Navbar;