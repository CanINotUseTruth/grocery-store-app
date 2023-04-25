import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoryButton.css';

function CategoryButton({
  category,
  setCurrentCategory,
  setCurrentSubCategory,
}) {
  const API_PATH =
    'http://localhost/grocery-store-app/server/subcategories.php/';

  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    handleSubCategoryFetch();
  }, []);

  function handleSubCategoryFetch() {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { topcategory: `${category.product_category}` },
    })
      .then((result) => {
        setSubCategories(result.data);
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  }

  return (
    <div className="subnav">
      <button
        className="subnavbtn"
        onClick={(event) => {
          event.preventDefault();
          setCurrentSubCategory('');
          setCurrentCategory(category.product_category);
        }}
      >
        {' '}
        {category.product_category}{' '}
      </button>
      <div className="subnav-content">
        {subCategories.map(function (subCategory) {
          return (
            <button
              key={subCategory.product_subcategory}
              onClick={(event) => {
                event.preventDefault();
                setCurrentCategory('');
                setCurrentSubCategory(
                  subCategory.product_subcategory
                );
              }}
            >
              {subCategory.product_subcategory}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryButton;
