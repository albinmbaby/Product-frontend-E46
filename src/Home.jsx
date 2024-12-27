
import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="home-header">
        <h1>ShopEase</h1>
      </header>

      {/* Banner Section */}
      <div className="home-banner">
        <div className="banner-content">
          <h2>Your One-Stop Shop</h2>
          <p>Explore a wide range of products at unbeatable prices.</p>
          <button className="banner-button">Start Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
