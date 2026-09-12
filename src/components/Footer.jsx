function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <div className="footer-logo">
            <span>S</span>
            ShopSphere
          </div>

          <p>
            A modern online shopping experience
            built with React and Vite.
          </p>
        </div>

        <div>
          <h4>Shop</h4>

          <a href="/products">
            All Products
          </a>

          <a href="/products">
            New Arrivals
          </a>

          <a href="/products">
            Best Sellers
          </a>
        </div>

        <div>
          <h4>Company</h4>

          <a href="/about">
            About Us
          </a>

          <a href="/about">
            Contact
          </a>

          <a href="/about">
            Our Story
          </a>
        </div>

        <div>
          <h4>Connect</h4>

          <div className="socials">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ShopSphere. All rights reserved.
        </p>

        <p>
          Built with React + Vite
        </p>
      </div>

    </footer>
  );
}

export default Footer;