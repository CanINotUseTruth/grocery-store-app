import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SearchBar from '../SearchBar/SearchBar';
import './Dashboard.css';

function Dashboard({
  handleSearch,
  searchTerm,
  setSearchTerm,
  handleClear,
  products,
  currentCategory,
  currentSubCategory,
  shoppingCart,
  setShoppingCart,
  toggleItemModal,
  setCurrentSelectedProduct,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  let dashboardContent;

  if (products !== 'No results' && products.length > 0) {
    dashboardContent = products.map(function (product) {
      return (
        <ProductCard
          key={product.product_id}
          product={product}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          toggleItemModal={toggleItemModal}
          setCurrentSelectedProduct={setCurrentSelectedProduct}
        />
      );
    });
  } else {
    dashboardContent = <p>{products}</p>;
  }

  return (
    <div className="dashboard-wrapper">
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClear={handleClear}
        currentCategory={currentCategory}
        currentSubCategory={currentSubCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div className="product-container">{dashboardContent}</div>
    </div>
  );
}

export default Dashboard;
