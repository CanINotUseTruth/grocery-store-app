import React from 'react';
import './ShoppingCartItem.css';
import { IoIosClose } from 'react-icons/io';

function ShoppingCartItem({
  product,
  shoppingCart,
  setShoppingCart,
}) {
  let image =
    'http://127.0.0.1:8080/images/' + product.image_name + '.jpg';

  function handleRemove() {
    let newCart = [...shoppingCart];
    const index = newCart.indexOf(product);
    if (index > -1) {
      newCart.splice(index, 1);
    }
    setShoppingCart(newCart);
  }

  return (
    <div className="item-container">
      <img
        className="cart-image"
        src={image}
        alt={product.product_name}
      />
      <p>
        {product.product_name} - {product.unit_measurement} - $
        {product.unit_price}
      </p>
      <div className="close-container" onClick={handleRemove}>
        <IoIosClose fontSize={24} />
      </div>
    </div>
  );
}

export default ShoppingCartItem;
