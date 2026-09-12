import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import {
  products,
  categories
} from "../data/products";

function Home({ onAddToCart }) {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                SHOP BY CATEGORY
              </span>

              <h2>
                Find what you love
              </h2>
            </div>

            <Link
              to="/products"
              className="view-link"
            >
              View all →
            </Link>

          </div>

          <div className="category-grid">

            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
              />
            ))}

          </div>

        </div>
      </section>

      <section className="section featured-section">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                TRENDING NOW
              </span>

              <h2>
                Popular products
              </h2>
            </div>

            <Link
              to="/products"
              className="view-link"
            >
              View all →
            </Link>

          </div>

          <div className="product-grid">

            {products
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}

          </div>

        </div>

      </section>

      <section className="offer-section">

        <div className="container offer-container">

          <div>
            <span>
              LIMITED TIME OFFER
            </span>

            <h2>
              Upgrade your everyday.
            </h2>

            <p>
              Get premium products at amazing prices.
            </p>
          </div>

          <Link
            to="/products"
            className="primary-button light"
          >
            Explore Deals →
          </Link>

        </div>

      </section>
    </>
  );
}

export default Home;