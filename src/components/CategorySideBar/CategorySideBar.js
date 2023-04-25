import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryButton from '../CategoryButton/CategoryButton';
import './CategorySideBar.css';

function CategorySideBar({
  setCurrentCategory,
  setCurrentSubCategory,
}) {
  const API_PATH =
    'http://localhost/grocery-store-app/server/categories.php/';

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleCategoryFetch();
  }, []);

  function handleCategoryFetch() {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
    })
      .then((result) => {
        setCategories(result.data);
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  }

  return (
    <div className="navbar">
      <p>Product Categories</p>
      <div className="cat-divider" />
      {categories.map(function (category) {
        return (
          <CategoryButton
            key={category.product_category}
            category={category}
            setCurrentCategory={setCurrentCategory}
            setCurrentSubCategory={setCurrentSubCategory}
          />
        );
      })}
    </div>
  );
}

export default CategorySideBar;
