import { useNavigate } from "react-router-dom";

function CategoryBar() {
  const navigate = useNavigate();

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Furniture",
    "Appliances",
    "Beauty",
    "Grocery",
    "Sports",
    "Books"
  ];

  const openCategory = (category) => {
    navigate(
      `/products?category=${encodeURIComponent(category)}`
    );
  };

  return (
    <div className="category-bar">

      <div
        className="category-item"
        onClick={() => navigate("/products")}
      >
        All Products
      </div>

      {categories.map((category) => (
        <div
          className="category-item"
          key={category}
          onClick={() =>
            openCategory(category)
          }
        >
          {category}
        </div>
      ))}

    </div>
  );
}

export default CategoryBar;