import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CartIcon from '../components/CartIcon';
import Logo from "../img/Group 346.svg"
import iconWishlist from "../img/Path 771.png"
import iconLogin from "../img/Path 773.png"

export class Adidas extends Component {

    render() {
        return (
            <div className=''>
                <div className='container'>
                    <div className='header'>
                        <form>
                            <input type="text" placeholder="Search" />
                        </form>
                        <img src={Logo} className="logo" />
                        <div className="icons">
                            <CartIcon />
                            <Link to="#!" className="icon">
                                <img src={iconWishlist} />
                                <span>Wishlist</span>
                            </Link>
                            <Link to="#!" className="icon">
                                <img src={iconLogin} />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Adidas;


