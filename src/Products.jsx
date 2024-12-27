import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const apiUrl = import.meta.env.VITE_PRODUCTS_API

  // Fetch products from the backend API
  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div>
      {/* Header */}
      <header className="bg-light py-3 text-center shadow-sm">
        <h1 className="text-primary">ShopEase</h1>
      </header>

      {/* Products Page */}
      <div className="container mt-4">
        <div className="row gy-4">
          {products.map((product) => (
            <div key={product._id} className="col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm h-100">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      {/* Product Details */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="fw-bold">Price: ${product.price}</p>
        <button className="btn btn-warning mt-auto">Add to cart</button>
      </div>
    </div>
  );
  };

export default Products