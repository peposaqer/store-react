import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import "./CartIcon.css";
import Icon from "../img/Path 772.png"
import CartItem from "./CartItem";

function CartIcon(Props) {
//   const { product } = Props;
    return (
        <>
            <div id="cart-icon">
                <Link to="/cart">
                    <img src={Icon} />
                    <h1>Cart</h1>
                    <span className="badge badge-danger">{Props.totalQuantity}</span>
                </Link>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);