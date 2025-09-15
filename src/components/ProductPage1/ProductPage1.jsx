import React, { useEffect, useState } from "react";
import "./ProductPage1.css";
import { useNavigate } from "react-router-dom";

const ProductPage1 = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const categories = [
    { key: "all", label: "All" },
    { key: "men's clothing", label: "Men" },
    { key: "women's clothing", label: "Women" },
    { key: "jewelery", label: "Jewelry" },
    { key: "electronics", label: "Electronics" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="page-container">
      <h1 className="page-title">Products</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`category-btn ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-img" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-rating">
              ⭐ {product.rating?.rate} ({product.rating?.count})
            </p>

            {/* Product Details Button */}
            <button
              className="details-btn"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Product Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage1;
