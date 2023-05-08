import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/black logo.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img alt="logo" src={logo} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="social">
                            <a href="#!"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#!"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#!"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#!"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h1>Useful links</h1>
                        <ul>
                            <li><Link to="/FAQ">FAQs</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                            <li><Link to="/map">Site Map</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h1>Explore</h1>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/team">Our Team</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h1>Contact Info</h1>
                        <ul>
                            <li><a href="tel: 01154258770">361-777-5681</a></li>
                            <li><a href="#!">654 White Avenue Portland, TX 78374</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyRight">
                    <p>Copyright 2022 | Uitaskca</p>
                </div>
            </div>
        </div>
    );
}