import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css"; 

const Products = () => {
    const [products, setProducts] = useState([]);
    const apiUrl = import.meta.env.VITE_PRODUCTS_API;

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
            <header className="bg-light py-4 text-center shadow-sm">
                <h1 className="text-primary fw-bold">ShopEase</h1>
                <p className="text-muted">Discover amazing products</p>
            </header>

            {/* Products Page */}
            <div className="container mt-5">
                <div className="row gy-4">
                    {products.map((product) => (
                        <div key={product._id} className="col-md-6 col-lg-4">
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
        <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
            />

            {/* Product Details */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate text-dark">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="fw-bold text-primary">Price: ${product.price}</p>
                <button className="btn btn-warning mt-3 rounded-pill shadow-sm hover-shadow">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Products;
