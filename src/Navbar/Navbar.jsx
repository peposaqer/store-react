import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import iconBar from "../img/Group 770.svg"
import Logo from "../img/Group 769.svg"
import iconContact from "../img/Group 756.svg"
import iconOrder from "../img/Group 758.svg"
import iconFind from "../img/Group 753.svg"
import arrowRight from "../img/Path 796.svg"
import arrowLeft from "../img/Path 797.svg"
import Adidas from "./adidas";
import Sort from "./sort";

export class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <div className="container">
                        <div className="nav-top">
                            <div className="bar">
                                <Link to="#!"><img src={iconBar} className="iconBar" /></Link>
                                <Link to="#!"><img src={Logo} className="logo" /></Link>
                            </div>
                            <div className="offer">
                                <Link to="#!" ><img src={arrowLeft} className="arrowLeft" /></Link>
                                <h1>Valentine’s Day Offers! Buy Two Get One Free <Link to="#!">Shop Now</Link></h1>
                                <Link to="#!" ><img src={arrowRight} className="arrowRight" /></Link>
                            </div>
                            <div className="icons">
                                <Link to="#!" className="icon">
                                    <img src={iconContact} />
                                    <span>Contact Us</span>
                                </Link>
                                <Link to="#!" className="icon">
                                    <img src={iconOrder} />
                                    <span>Track Order</span>
                                </Link>
                                <Link to="#!" className="icon">
                                    <img src={iconFind} />
                                    <span>Find A Store</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Adidas />
                <Sort />
            </>
        );
    }
};

export default  Navbar;


