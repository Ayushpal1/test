import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

const mockProducts = [
  {
    id: 1,
    title: "TVS Jupiter",
    price: "₹ 96,500",
    year: "2025",
    mileage: "0 km",
    location: "BARGADWA, GORAKHPUR",
    date: "APR 11",
    category: "Scooters",
    featured: false,
    image: "https://via.placeholder.com/300x200/4A90E2/ffffff?text=TVS+Jupiter",
    description: "Get Exciting Offers!! TVS Jupiter Engine Capacity: 113.3 cc, Mileage - ARAI: 53.84 kmpl, Kerb Weight: 106 kg",
    seller: {
      name: "BikeWale",
      memberSince: "Dec 2024",
      itemsListed: 18535
    }
  },
  {
    id: 2,
    title: "Yamaha R15",
    price: "₹ 75,000",
    year: "2016",
    mileage: "83,000 km",
    location: "MANSAROVAR, JAIPUR",
    date: "JUN 15",
    category: "Cars",
    featured: false,
    image: "https://via.placeholder.com/300x200/E94B3C/ffffff?text=Honda+City",
    description: "Well maintained Honda City diesel variant with excellent mileage and performance. Single owner, all papers clear.",
    seller: {
      name: "Rajesh Kumar",
      memberSince: "Mar 2020",
      itemsListed: 12
    }
  },
  {
    id: 3,
    title: "TVS Jupiter",
    price: "₹ 39,999",
    year: "2019",
    mileage: "",
    location: "SAMUDRAPUR MIDC, MAHARASHTRA",
    date: "TODAY",
    category: "Mobile Phones",
    featured: false,
    image: "https://via.placeholder.com/300x200/50E3C2/ffffff?text=iPhone+11",
    description: "Get Exciting Offers!! TVS Jupiter Engine Capacity: 113.3 cc, Mileage - ARAI: 53.84 kmpl, Kerb Weight: 106 kg",
    seller: {
      name: "Mobile Store",
      memberSince: "Jan 2022",
      itemsListed: 245
    }
  },
  {
    id: 4,
    title: "TVS Jupiter",
    price: "₹ 72,000",
    year: "2025",
    mileage: "630 km",
    location: "SAMUDRAPUR MIDC, MAHARASHTRA",
    date: "4 DAYS AGO",
    category: "Cars",
    featured: false,
    image: "https://via.placeholder.com/300x200/BD10E0/ffffff?text=Swift+Dzire",
    description: "Get Exciting Offers!! TVS Jupiter Engine Capacity: 113.3 cc, Mileage - ARAI: 53.84 kmpl, Kerb Weight: 106 kg",
    seller: {
      name: "Auto Dealer",
      memberSince: "Aug 2019",
      itemsListed: 89
    }
  },
  {
    id: 5,
    title: "TVS Jupiter",
    price: "₹ 90,000",
    year: "2022",
    mileage: "500 km",
    location: "SAMUDRAPUR, MAHARASHTRA",
    date: "5 DAYS AGO",
    category: "Cars",
    featured: false,
    image: "https://via.placeholder.com/300x200/F5A623/ffffff?text=Mahindra+Xylo",
    description: "Get Exciting Offers!! TVS Jupiter Engine Capacity: 113.3 cc, Mileage - ARAI: 53.84 kmpl, Kerb Weight: 106 kg",
    seller: {
      name: "Family Car Owner",
      memberSince: "Dec 2021",
      itemsListed: 3
    }
  },
  {
    id: 6,
    title: "TVS Jupiter",
    price: "₹ 45,000",
    year: "2024",
    mileage: "300 km",
    location: "GOMAJI WARD, HINGANGHAT",
    date: "6 DAYS AGO",
    category: "Electronics",
    featured: false,
    image: "https://via.placeholder.com/300x200/7ED321/ffffff?text=Smart+Watch",
    description: "Get Exciting Offers!! TVS Jupiter Engine Capacity: 113.3 cc, Mileage - ARAI: 53.84 kmpl, Kerb Weight: 106 kg",
    seller: {
      name: "Electronics Hub",
      memberSince: "Feb 2023",
      itemsListed: 156
    }
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredProducts(mockProducts);
    } else {
      const filtered = mockProducts.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.location.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleCategoryFilter = (category) => {
    if (category === 'ALL CATEGORIES' || category === '') {
      setFilteredProducts(mockProducts);
    } else {
      const filtered = mockProducts.filter(product => 
        product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {selectedProduct ? (
        <ProductDetail 
          product={selectedProduct} 
          onBack={handleBackToList}
        />
      ) : (
        <>
          <CategoryFilter onCategorySelect={handleCategoryFilter} />
          <ProductGrid 
            products={filteredProducts} 
            onProductClick={handleProductClick}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;