import React, { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL CATEGORIES');

  const categories = [
    'ALL CATEGORIES',
    // 'Cars',
    'Motorcycles', 
    //'Mobile Phones',
    //'For Sale: Houses & Apartments',
    'Scooters',
    'Commercial & Other Vehicles',
    'For Rent: Bikes',
    // 'Electronics',
    // 'Fashion',
    // 'Home & Garden',
    // 'Sports',
    // 'Books & Hobbies'
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="category-filter">
      <div className="category-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;