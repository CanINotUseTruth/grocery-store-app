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
      let newCart = [...shoppingCart, product];
      setShoppingCart(newCart);
    } else {
      setShoppingCart([product]);
    }
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
