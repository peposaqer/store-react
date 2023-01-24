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
            <div className='cart'>
                <img src={product.image} />
                <div>
                    <p>{product.description}</p>
                    <span>Quantity: {item.quantity}</span>
                    <div className='remove'>
                        <span className='price'>{product.price}</span>
                        <button className='pickup' onClick={() => props.removeFromCart(index)}>Remove</button>
                    </div>
                </div>
            </div>
            <h1>Total: {item.quantity * product.price} LE</h1>
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