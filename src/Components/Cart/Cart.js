import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div className="Cart">
            <h3 className="text-secondary">Total: </h3>
            <h1>${totalPrice}</h1>
            <h3 className="text-secondary">{cart.length} Course in Cart </h3>
            <button className="btn btn-primary" onClick={() => alert('Thank You!')}>Checkout</button>
            
        </div>
    );
};

export default Cart;