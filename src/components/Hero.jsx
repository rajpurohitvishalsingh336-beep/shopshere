import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            ✨ NEW COLLECTION 2026
          </span>

          <h1>
            Everything you love.
            <span> All in one place.</span>
          </h1>

          <p>
            Discover premium products, amazing deals and
            everything you need for your modern lifestyle.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="primary-button"
            >
              Shop Now →
            </Link>

            <Link
              to="/about"
              className="secondary-button"
            >
              Explore ShopSphere
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="floating-card card-one">
            🎧
            <span>Electronics</span>
          </div>

          <div className="hero-circle">
            🛍️
          </div>

          <div className="floating-card card-two">
            👟
            <span>Fashion</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;