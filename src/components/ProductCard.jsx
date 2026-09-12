import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="discount-badge">
          {Math.round(
            ((product.oldPrice - product.price) /
              product.oldPrice) *
              100
          )}
          % OFF
        </span>

        <button className="wishlist-button">
          ♡
        </button>

      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="rating">
          ⭐ {product.rating}
          <span>
            ({product.reviews})
          </span>
        </div>

        <div className="product-bottom">

          <div className="price">
            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            <del>
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </del>
          </div>

          <button
            className="add-button"
            onClick={() => onAddToCart(product)}
          >
            +
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;