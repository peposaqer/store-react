import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../Api/products";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/action";

class Cart extends React.Component {

  placeOrder = () => {
    this.props.clearCart();
    alert("We recieved your order, and we are working on it.");
  };

  render() {
    return (
      <div>
        <h1>cart</h1>

        <div className="row">
          {this.props.cartItems.map((item, index) => (
            <div className={"col-3"} key={index}>
              <CartItem item={item} index={index} />
            </div>
          ))}
        </div>
        <br />
        <h3>Total: {this.props.total}</h3>
        <button className="btn btn-primary btn-block" onClick={this.placeOrder}>
          Place order
        </button>
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
