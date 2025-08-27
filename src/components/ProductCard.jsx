import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const formatPrice = (price) => {
    return price;
  };

  return (
    <div className={`product-card ${product.featured ? 'featured' : ''}`} onClick={onClick}>
      {product.featured && <div className="featured-badge">FEATURED</div>}
      
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
        <div className="heart-icon">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      <div className="product-info">
        <div className="product-price">
          {formatPrice(product.price)}
        </div>
        
        {product.mileage && (
          <div className="product-meta">
            {product.year} - {product.mileage}
          </div>
        )}
        
        <div className="product-title">
          {product.title}
        </div>
        
        {/* <div className="product-location">
          {product.location}
        </div> */}
        
        <div className="product-date">
          {product.date}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;