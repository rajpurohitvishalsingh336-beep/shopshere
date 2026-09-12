import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products({ onAddToCart }) {

  const [searchParams] = useSearchParams();

  const categoryFromURL =
    searchParams.get("category") || "All";

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState(categoryFromURL);

  const [sort, setSort] =
    useState("default");

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home",
    "Accessories"
  ];

  const filteredProducts = useMemo(() => {

    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;

  }, [category, search, sort]);

  return (
    <main className="page">

      <div className="container">

        <div className="page-header">

          <span className="eyebrow">
            SHOPSPHERE STORE
          </span>

          <h1>
            Explore Products
          </h1>

          <p>
            Discover products selected for
            modern everyday living.
          </p>

        </div>

        <div className="filter-bar">

          <div className="search-box">
            🔍

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <div className="category-filters">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="default">
              Sort By
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="rating">
              Top Rated
            </option>
          </select>

        </div>

        <div className="results-info">
          <span>
            {filteredProducts.length} products found
          </span>
        </div>

        {filteredProducts.length > 0 ? (

          <div className="product-grid products-page-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}

          </div>

        ) : (

          <div className="empty-search">
            <div>🔎</div>

            <h2>
              No products found
            </h2>

            <p>
              Try another search term or category.
            </p>
          </div>

        )}

      </div>

    </main>
  );
}

export default Products;