import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css';

function OrderForm({
  shoppingCart,
  cartTotal,
  toggleOrderModal,
  setShoppingCart,
}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [suburb, setSuburb] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();

  const API_PATH =
    'http://localhost/grocery-store-app/server/order.php/';

  function handleOrderEmail(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: {
        name: `${name}`,
        email: `${email}`,
        address: `${address}`,
        suburb: `${suburb}`,
        city: `${city}`,
        postcode: `${postcode}`,
        shoppingCart: `${shoppingCart}`,
        cartTotal: `${cartTotal}`,
      },
    }).then((result) => {
      console.log(result);
    });
  }

  return (
    <form className="order-form" onSubmit={handleOrderEmail}>
      <label htmlFor="name">Name: </label>
      <input
        className="order-form-field"
        id="name"
        type="text"
        value={name}
        required
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label htmlFor="email">Email: </label>
      <input
        className="order-form-field"
        id="email"
        type="text"
        value={email}
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <label htmlFor="address">Address: </label>
      <input
        className="order-form-field"
        id="address"
        type="text"
        value={address}
        required
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      ></input>
      <label htmlFor="suburb">Suburb: </label>
      <input
        className="order-form-field"
        id="suburb"
        type="text"
        value={suburb}
        required
        onChange={(event) => {
          setSuburb(event.target.value);
        }}
      ></input>
      <label htmlFor="city">City: </label>
      <input
        className="order-form-field"
        id="city"
        type="text"
        value={city}
        required
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
      <label htmlFor="postcode">Postcode: </label>
      <input
        className="order-form-field"
        id="postcode"
        type="text"
        value={postcode}
        required
        onChange={(event) => {
          setPostcode(event.target.value);
        }}
      ></input>
      <input
        className="order-form-button"
        type="submit"
        value="Submit Order"
      />
      <input
        className="order-form-button"
        type="button"
        onClick={toggleOrderModal}
        value="Cancel"
      />
    </form>
  );
}

export default OrderForm;
