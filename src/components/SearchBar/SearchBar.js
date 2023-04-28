import React from 'react';
import './SearchBar.css';

function SearchBar({
  handleSearch,
  searchTerm,
  setSearchTerm,
  handleClear,
  currentCategory,
  currentSubCategory,
  maxPrice,
  setMaxPrice,
}) {
  // WIP - fix title to show subcategories as well
  let title = 'All Products';

  if (currentCategory !== '') {
    title = currentCategory;
  }
  if (currentSubCategory !== '') {
    title = currentSubCategory;
  }

  return (
    <div>
      <div className="search-container">
        <p>{title}</p>
        <span className="search-bar-container">
          <form onSubmit={handleSearch}>
            <div className="range-container">
              <div className="range-text">Max Price:</div>
              <input
                type="range"
                min="1"
                max="100"
                value={maxPrice}
                onChange={function (event) {
                  setMaxPrice(event.target.value);
                }}
                className="price-slider"
                id="myRange"
              />
              <div className="range-text">${maxPrice}</div>
            </div>

            <input
              className="search-field"
              placeholder="Input Search Term..."
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <button className="search-button" type="submit">
              Search
            </button>
            <button
              className="search-button"
              type="button"
              onClick={handleClear}
            >
              Reset
            </button>
          </form>
        </span>
      </div>
      <div className="search-divider" />
    </div>
  );
}

export default SearchBar;
