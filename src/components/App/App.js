import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Dashboard from '../Dashboard/Dashboard';
import CategorySideBar from '../CategorySideBar/CategorySideBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Modal from '../Modal/Modal';
import OrderForm from '../OrderForm/OrderForm';
import ItemDetails from '../ItemDetails/ItemDetails';

const API_PATH =
  'http://localhost/grocery-store-app/server/products.php/';

// Look for On-Mount innefficiencies
function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(100);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSubCategory, setCurrentSubCategory] = useState('');
  const [currentSelectedProduct, setCurrentSelectedProduct] =
    useState({});
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [orderModalVisibility, setOrderModalVisibility] =
    useState(false);
  const [itemModalVisibility, setItemModalVisibility] =
    useState(false);

  function toggleOrderModal() {
    setOrderModalVisibility(!orderModalVisibility);
  }

  function toggleItemModal() {
    setItemModalVisibility(!itemModalVisibility);
  }

  useEffect(() => {
    handleDefaultArray();
  }, []);

  useEffect(() => {
    setSearchTerm('');
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: {
        category: `${currentCategory}`,
        subCategory: `${currentSubCategory}`,
      },
    })
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  }, [currentCategory, currentSubCategory]);

  function handleSearch(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: {
        search: `${searchTerm}`,
        category: `${currentCategory}`,
        subCategory: `${currentSubCategory}`,
        price: `${maxPrice}`,
      },
    })
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  }

  // Change defaults to use axios
  function handleDefaultArray() {
    axios({
      method: 'get',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
    })
      .then((result) => {
        console.log(result);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  }

  function handleClear(event) {
    event.preventDefault();
    setSearchTerm('');
    setCurrentCategory('');
    setCurrentSubCategory('');
    setMaxPrice(100);
    // fetch data
    handleDefaultArray();
  }

  return (
    <React.Fragment>
      <header className="app-header">
        <NavigationBar />
      </header>

      <div className="app-body">
        <CategorySideBar
          setCurrentCategory={setCurrentCategory}
          setCurrentSubCategory={setCurrentSubCategory}
        />
        <Dashboard
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClear={handleClear}
          products={products}
          currentCategory={currentCategory}
          currentSubCategory={currentSubCategory}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          toggleItemModal={toggleItemModal}
          setCurrentSelectedProduct={setCurrentSelectedProduct}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <ShoppingCart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          toggleOrderModal={toggleOrderModal}
        />
      </div>

      {orderModalVisibility && (
        <Modal title="Order Modal" handleDismiss={toggleOrderModal}>
          <OrderForm
            shoppingCart={shoppingCart}
            cartTotal={cartTotal}
            toggleOrderModal={toggleOrderModal}
            setShoppingCart={setShoppingCart}
          />
        </Modal>
      )}
      {itemModalVisibility && (
        <Modal title="Item Modal" handleDismiss={toggleItemModal}>
          <ItemDetails
            product={currentSelectedProduct}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
