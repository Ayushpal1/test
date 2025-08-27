import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock additional images for the gallery
  const productImages = [
    product.image,
    product.image.replace('300x200', '400x300'),
    product.image.replace('300x200', '350x250'),
    product.image.replace('300x200', '320x240')
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const breadcrumbs = [
    'Home',
    product.category === 'Scooters' ? 'Bikes' : product.category,
    product.category,
    `${product.category} in Uttar Pradesh`,
    `${product.category} in Gorakhpur`,
    product.title
  ];

  return (
    <div className="product-detail">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="breadcrumb-separator"></span>}
            <button 
              className={index === breadcrumbs.length - 1 ? 'breadcrumb-current' : 'breadcrumb-link'}
              onClick={index === 0 ? onBack : undefined}
            >
              {item}
            </button>
          </span>
        ))}
      </div>

      <div className="detail-container">
        {/* Left Column - Images */}
        <div className="product-images-section">
          <div className="main-image-container">
            <button className="image-nav prev" onClick={handlePrevImage}>
              ‹
            </button>
            <img 
              src={productImages[currentImageIndex]} 
              alt={product.title}
              className="main-image"
            />
            <button className="image-nav next" onClick={handleNextImage}>
              ›
            </button>
            
            <div className="image-counter">
              {currentImageIndex + 1} / {productImages.length}
            </div>
          </div>
          
          <div className="thumbnail-container">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="product-info-section">
          <div className="product-header">
            {product.featured && <span className="featured-badge">FEATURED</span>}
            <h1 className="product-title">{product.title}</h1>
            <div className="product-price">{product.price}</div>
          </div>

          <div className="product-overview">
            <h3>Overview</h3>
            <div className="overview-grid">
              {product.mileage && (
                <div className="overview-item">
                  <span className="overview-label">Mileage</span>
                  <span className="overview-value">{product.mileage}</span>
                </div>
              )}
              {/* <div className="overview-item">
                <span className="overview-label">Location</span>
                <span className="overview-value">{product.location}</span>
              </div> */}
              <div className="overview-item">
                <span className="overview-label">Posting date</span>
                <span className="overview-value">{product.date}</span>
              </div>
            </div>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          {/* <div className="seller-info">
            <div className="seller-avatar">
              <div className="avatar-placeholder">
                {product.seller.name.charAt(0)}
              </div>
            </div>
            <div className="seller-details">
              <div className="seller-name">Posted By</div>
              <div className="seller-name-value">{product.seller.name}</div>
              <div className="seller-member">Member since {product.seller.memberSince}</div>
              <div className="seller-listings">{product.seller.itemsListed} Items listed</div>
            </div>
          </div> */}

          <div className="action-buttons">
            <button className="show-number-btn">Contact</button>
            {/* <button className="chat-btn">Chat</button> */}
          </div>

          {/* <div className="ad-id">
            <strong>AD ID: {product.id}80372833{product.id}</strong>
          </div> */}
        </div>
      </div>

      {/* Related Ads Section */}
      <div className="related-ads">
        <h3>Related ads</h3>
        <div className="related-grid">
          {Array.from({length: 6}, (_, index) => (
            <div key={index} className="related-card">
              <img src={product.image} alt="Related product" />
              <div className="related-info">
                <div className="related-price">{product.price}</div>
                <div className="related-title">{product.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="back-button" onClick={onBack}>
        ← Back to listings
      </button>
    </div>
  );
};

export default ProductDetail;