import React from 'react';

import './Summary.css';

const Summary = (props) => {
    console.log('add' , props);
    const {name, price } = props.cart;

    return (
        <div className="cart-summary">
            <div>
                <h6>{name}</h6>
                <h6 className="text-secondary"><span className="text-danger font-weight-bold">${price}</span></h6>
                <hr/>
            </div>
            
        </div>
    );
};

export default Summary;