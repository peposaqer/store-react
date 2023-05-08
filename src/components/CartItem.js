import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from '../store/actions/action';

function ProductItem(props) {
  const { item, index } = props;
  const { product } = item;

  return (
    <>
    <div className="mb-5">
        <div className='summary'>
            <div className='cartItem'>
                <img src={product.image} />
                <div>
                    <p>{product.description}</p>
                    <strong>Quantity: {item.quantity}</strong>
                    <div className='remove'>
                        <div className="card-price">
                          <span>{product.price} EGP</span>
                          <span className="offer">{product.discount} EGP</span>
                        </div>
                        <button className='pickup' onClick={() => props.removeFromCart(index)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
            {/* <h1>Total: {product.price } EGP</h1> */}
        </div>
        <div className='buttons'>
            {/* <button className='pickup'>Review Cart</button> */}
            {/* <button className='add'>Complete Checkout</button> */}
        </div>
    </div>
    </>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index)),
  };
};


export default connect(null, mapDispatchToProps)(ProductItem);