// ShoppingCart.js
// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const ShoppingCart = ({ cartItems, addToCart }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart Items</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
