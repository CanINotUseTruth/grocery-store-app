import React from 'react';
import './ShoppingCart.css';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

function ShoppingCart({
  shoppingCart,
  setShoppingCart,
  cartTotal,
  setCartTotal,
  toggleOrderModal,
}) {
  const [cartVisibility, setCartVisibility] = useState(true);

  let cartHasItems = shoppingCart.length > 0 ? false : true;

  useEffect(() => {
    let newCartTotal = 0.0;
    shoppingCart.forEach((product) => {
      newCartTotal += parseFloat(
        product.unit_price * product.quantity
      );
    });
    setCartTotal(newCartTotal);
  }, [shoppingCart, setCartTotal]);

  function toggleCart() {
    setCartVisibility(!cartVisibility);
  }

  function clearCart() {
    setShoppingCart([]);
  }

  let iconClassName = cartVisibility ? 'cart-icon open' : 'cart-icon';

  return (
    <div className={'cart-container'}>
      <div className={iconClassName} onClick={toggleCart}>
        <FaShoppingCart />
      </div>
      {cartVisibility && (
        <div className="cart-wrapper">
          {shoppingCart.map(function (product) {
            return (
              <ShoppingCartItem
                key={crypto.randomUUID()}
                product={product}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            );
          })}
          <div className="cart-controls-wrapper">
            <p>Total: ${cartTotal.toFixed(2)}</p>
            <div>
              <button
                onClick={toggleOrderModal}
                disabled={cartHasItems}
              >
                Order
              </button>
              <button onClick={clearCart}>Clear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
