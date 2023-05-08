import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../Api/products";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/action";
import pet from "../img/Union.png"

class Cart extends React.Component {

  placeOrder = () => {
    this.props.clearCart();
    console.log("cxv")
    alert("We recieved your order, and we are working on it.");
  };
  

  render() {
    
    return (
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1> <img alt='pet' src={pet} /> Shopping Cart</h1>
              {/* <span>You have {this.props.cartItems.totalQuantity} item in your cart</span> */}
            </div>
            <div className="col-md-8">
              {this.props.cartItems.map((item, index) => (
                <div className={"col-12"} key={index}>
                  <CartItem item={item} index={index} />
                </div>
              ))}
            </div>
            <div className="col-md-4">
                <form className='cart-form' noValidate>
                  <div className='row'>
                      <div className='col-md-12'>
                          <h1>Card Details</h1>
                          <div className='visa'>
                              <img alt='d' src='' />
                              <img alt='d' src='' />
                          </div>
                      </div>
                      <div className='col-md-12'>
                          <label>Name on card</label>
                          <input
                              type="text"
                              placeholder="Name"
                              className="form-contact"
                          />
                      </div>
                      <div className='col-md-12'>
                          <label>Card Number</label>
                          <input
                              type="number"
                              placeholder="1111 2222 3333 4444"
                              className="form-contact"
                          />
                      </div>
                      <div className='col-md-4'>
                          <label>Expiration date</label>
                          <input
                              type="number"
                              placeholder="mm/yy"
                              className="form-contact"
                          />
                      </div>
                      <div className='col-md-4'>
                          <label>CVV</label>
                          <input
                              type="number"
                              placeholder="123"
                              className="form-contact"
                          />
                      </div>
                      <div className='col-md-12 mt-5'>
                          <button type="submit" className='Now' onClick={this.placeOrder}>
                            <span>{this.props.total} EGP</span>
                            <strong>Checkout <i className="fa fa-arrow-right"></i></strong>
                          </button>
                      </div>
                  </div>
              </form>
            </div>
          </div>
          {/* <h3>Total: {this.props.total}</h3>
          <button className="btn btn-primary btn-block" onClick={this.placeOrder}>
            Place order
          </button> */}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
