import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="product-grid-container">
      <div className="grid-header">
        <h2>Fresh recommendations</h2>
        <div className="results-count">
          {products.length} ads
        </div>
      </div>
      
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No products found matching your search criteria.</p>
          </div>
        )}
      </div>
      
      {/* Call to Action Section */}
      {/* <div className="cta-section">
        <div className="cta-card">
          <h3>Want to see your stuff here?</h3>
          <p>Make some extra cash by selling</p>
          <button className="cta-button">Start Selling</button>
        </div>
      </div> */}
    </div>
  );
};

export default ProductGrid;