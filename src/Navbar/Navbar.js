import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/black logo.png"
import CartIcon from "../components/CartIcon";

function Navbar() {
        return (
            <>
                <div className="navbar">
                    <div className="container">
                        <div className="nav-top">
                            <div className="bar">
                                <Link to="#!"><img src={Logo} className="logo" /></Link>
                            </div>
                            <div className="Links">
                                <NavLink to="/" className="nav-link" activeClassName="active"  exact>Home</NavLink>
                                <NavLink to="/about" activeClassName="active" className="nav-link">About Us</NavLink>
                                <NavLink to="/services" activeClassName="active" className="nav-link">Services</NavLink>
                                <NavLink to="/products" activeClassName="active" className="nav-link">Products</NavLink>
                            </div>
                            <div className="notification">
                                <div className="dropdown">
                                    <button className=" position-relative" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-bell"></i>
                                        <span className="position-absolute top-0 start-75 translate-middle p-1 bg-danger border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <img src={Logo} alt="Logo" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </li>
                                        <li>
                                            <img src={Logo} alt="Logo" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </li>
                                        <li>
                                            <img src={Logo} alt="Logo" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </li>
                                        <li>
                                            <img src={Logo} alt="Logo" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </li>
                                        <li>
                                            <img src={Logo} alt="Logo" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </li>
                                    </ul>
                                </div>
                                <CartIcon />
                                <Link to="/profile"><i className="fa-regular fa-user"></i></Link>
                                <Link to="#!" className="bars" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-bars"></i></Link>
                            </div>
                            <div className="buttons">
                                <Link to="/" className="sign">Sign In</Link>
                                <Link to="/" className="register">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        ...
                    </div>
                </div>
            </>
        );
};

export default  Navbar;