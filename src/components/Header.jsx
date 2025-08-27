import React, { useState } from 'react';
import './Header.css';
import img from '../asset/icon.png';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('India');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={img} alt="Revvit" />
        </div>

        {/* Location Selector */}
        <div className="location-selector">
          <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 0C5.2 0 3 2.2 3 5c0 2.8 5 11 5 11s5-8.2 5-11c0-2.8-2.2-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          <select 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            className="location-select"
          >
            <option value="India">India</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
          </select>
        </div>

        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Bike Name"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M11.5 6.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm2.5 8l-3.5-3.5"/>
              </svg>
            </button>
          </div>
        </form>

        {/* Right Side Navigation */}
        <div className="header-actions">
          {/* <div className="language-selector">
            <span>ENGLISH</span>
            <svg width="12" height="8" viewBox="0 0 12 8">
              <path d="M1 1l5 5 5-5"/>
            </svg>
          </div> */}
          
          <button className="login-btn">
            Login
          </button>
          
          <button className="sell-btn">
            + SELL
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;