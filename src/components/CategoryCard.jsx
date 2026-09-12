import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(
        category.name
      )}`}
      className="category-card"
    >

      <div className="category-icon">
        {category.icon}
      </div>

      <h3>{category.name}</h3>

      <p>{category.description}</p>

      <span>
        Explore →
      </span>

    </Link>
  );
}

export default CategoryCard;