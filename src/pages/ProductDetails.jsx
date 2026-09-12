import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import { products } from "../data/products";

function ProductDetails({ onAddToCart }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="page">
        <div className="container not-found">
          <h1>Product Not Found</h1>

          <Link
            to="/products"
            className="primary-button"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const handleAdd = () => {

    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }

  };

  return (
    <main className="page">

      <div className="container">

        <div className="breadcrumb">
          <Link to="/">
            Home
          </Link>

          <span>›</span>

          <Link to="/products">
            Products
          </Link>

          <span>›</span>

          <span>{product.name}</span>
        </div>

        <div className="details-layout">

          <div className="details-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

          <div className="details-content">

            <span className="product-category">
              {product.category}
            </span>

            <h1>
              {product.name}
            </h1>

            <div className="details-rating">
              ⭐ {product.rating}

              <span>
                {product.reviews} customer reviews
              </span>
            </div>

            <div className="details-price">

              <strong>
                ₹{product.price.toLocaleString("en-IN")}
              </strong>

              <del>
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </del>

            </div>

            <p className="details-description">
              {product.description}
            </p>

            <div className="features">

              <h3>
                Product Features
              </h3>

              {product.features.map(
                (feature, index) => (
                  <div
                    key={index}
                    className="feature"
                  >
                    ✓ {feature}
                  </div>
                )
              )}

            </div>

            <div className="purchase-row">

              <div className="quantity-control large">

                <button
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  +
                </button>

              </div>

              <button
                className="primary-button add-to-cart"
                onClick={handleAdd}
              >
                🛒 Add to Cart
              </button>

            </div>

            <div className="delivery-info">

              <div>
                🚚
                <span>
                  Free delivery on orders over ₹999
                </span>
              </div>

              <div>
                ↩️
                <span>
                  Easy returns within 7 days
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;