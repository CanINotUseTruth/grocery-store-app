import React from 'react';
import InStockPill from '../InStockPill/InStockPill';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';

function ProductCard({
  product,
  shoppingCart,
  setShoppingCart,
  toggleItemModal,
  setCurrentSelectedProduct,
}) {
  let image =
    'http://127.0.0.1:8080/images/' + product.image_name + '.jpg';

  const stockAvailable = product.unit_stock <= 0 ? true : false;

  function handleAdd() {
    if (shoppingCart.length > 0) {
      let productIndex = checkForIndex(product);
      if (productIndex > -1) {
        let newCart = [...shoppingCart];
        newCart[productIndex].quantity += 1;
        setShoppingCart(newCart);
      } else {
        let newCart = [...shoppingCart, { ...product, quantity: 1 }];
        setShoppingCart(newCart);
      }
    } else {
      setShoppingCart([{ ...product, quantity: 1 }]);
    }
  }

  function checkForIndex(product) {
    var checkedArray = [-1];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].product_id === product.product_id) {
        checkedArray[0] = i;
      }
    }
    return checkedArray[0];
  }

  return (
    <div className="card">
      <div
        onClick={function () {
          setCurrentSelectedProduct(product);
          toggleItemModal();
        }}
      >
        <div className="head-container">
          <p>
            {product.product_name} - {product.unit_measurement}
          </p>
        </div>
        <div className="divider" />
        <img
          className="image"
          src={image}
          alt={product.product_name}
        />
        <div className="info-container">
          <p>Price: ${product.unit_price}</p>
          <InStockPill unit_stock={product.unit_stock} />
        </div>
      </div>
      <div className="cartbtn-container">
        <form>
          <div className="cart-button">
            <input
              type="button"
              value="Add to Cart"
              onClick={handleAdd}
              disabled={stockAvailable}
            />
            <FaCartPlus />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCard;
