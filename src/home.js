import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  // Sample data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Crocin 650",
      price: "25/-",
    },
    {
      id: 2,
      name: "T-Bact 5gm",
      price: "115/-",
    },
    // Add more featured products here
  ];

  const promotions = [
    {
      id: 1,
      title: "20% Discount",
      description: "Use 'New20' to get upto 20% off for new users.",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above 500/-",
    },
    // Add more promotions here
  ];

  // Sample data for reviews
  const reviews = [
    {
      id: 1,
      name: "Patrick Bateman",
      comment: "Great products and fast delivery!",
    },
    {
      id: 2,
      name: "Tyler Durden",
      comment: "Highly recommend this online store.",
    },
    // Add more reviews here
  ];

  return (
    <div>
    <header className="header">
        <div className="header-content">
          <h1 className="logo"> KAV Online Medical Store</h1>
          <p className="slogan">Delivering Quality Healthcare Products to Your Doorstep</p>
          <Link to="/about" className="header-link">Learn More</Link>
        </div>
      </header>
      <nav>
  <ul className="navbar">
    <li className="login-btn">
      <Link to="/">Sign Out</Link>
    </li>
    <li className="right-links">
      <Link to="/about">About</Link>
      <Link to="/support">Support</Link>
    </li>
  </ul>
</nav>


      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-buttons">
                <button className="shop-now-btn">Shop Now</button>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promotions-section">
        <h2>Promotions</h2>
        <div className="promotions">
          {promotions.map((promotion) => (
            <div key={promotion.id} className="promotion-card">
              <h3 className="promotion-title">{promotion.title}</h3>
              <p className="promotion-description">
                {promotion.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2>Reviews</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-comment">{review.comment}</p>
              <p className="review-name">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 KAV Online Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
