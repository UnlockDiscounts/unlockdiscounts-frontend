import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import categories_data from "../data/categories_data";
import "../styles/Categories.css";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    navigate(`/category/${category.categorie_name.toLowerCase().replace(/ /g, "_")}`);
  };

  return (
    <div className="categories-container">
      <h2 className="categories-title">Categories</h2>
      <div className="categories-list">
        {categories_data.map((category) => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.categorie_name}
          </button>
        ))}
      </div>
      <button className="explore-more-button">Explore More</button>
    </div>
  );
};

export default Categories;
