import React from 'react';
import './ItemDetails.css';
import InStockPill from '../InStockPill/InStockPill';
import { FaCartPlus } from 'react-icons/fa';

function ItemDetails({ product, shoppingCart, setShoppingCart }) {
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
    <div>
      <div className="details-title-container">
        <div className="details-title">
          {product.product_id} - {product.product_name}
        </div>
        <InStockPill unit_stock={product.unit_stock} />
      </div>
      <div className="details-divider" />
      <div className="details-content">
        <img alt={product.product_name} src={image} />
        <ul className="details-list">
          <li>
            <span>Category:</span> {product.product_category}
          </li>
          <li>
            <span>Subcategory:</span> {product.product_subcategory}
          </li>
          <li>
            <span>Unit Price:</span> {product.unit_price}
          </li>
          <li>
            <span>Unit Measurement:</span> {product.unit_measurement}
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ItemDetails;
