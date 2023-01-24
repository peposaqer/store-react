import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Cash from "../img/Rectangle 586.png"
import Visa from "../img/Group 1437.png"
import Master from "../img/Group 1438.png"
import Nova from "../img/Group 1439.svg"
import Send from "../img/Group 1431.svg"
import Facebook from "../img/Group 1432.svg"
import LinkedIn from "../img/Group 1435.svg"
import Inst from "../img/Group 1433.svg"
import Twitter from "../img/Group 1434.svg"
import Logo from "../img/Group 1436.svg"

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="description">
                                <img src={Logo} />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    
                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p>
                                
                                <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="email">
                                        <h1>Subscribe to our newsletter</h1>
                                        <form className="">
                                            <div className="group">
                                                <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Your Mail"/>
                                                <button className="submit" type="submit">Subscribe <img src={Send} /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <ul className="links">
                                        <li><Link to="/About"> About Us</Link></li>
                                        <li><Link to="/Contact"> Contact Us</Link></li>
                                        <li><Link to="/Order"> Track Order</Link></li>
                                        <li><Link to="/Terms"> Terms & Conditions</Link></li>
                                        <li><Link to="/Privacy"> Privacy Policy</Link></li>
                                        <li><Link to="/Sell"> Sell With Us</Link></li>
                                        <li><Link to="/Shipping"> Shipping And Returns</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="social">
                                        <li><Link to="" ><img src={Facebook} /> /YESHTERY</Link></li>
                                        <li><Link to="" ><img src={LinkedIn} /> /YESHTERY</Link></li>
                                        <li><Link to="" ><img src={Inst} /> /YESHTERY</Link></li>
                                        <li><Link to="" ><img src={Twitter} /> /YESHTERY</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="copyRight">
                                <h5>© 2021 yeshtery, all rights reserved.</h5>
                                <div>
                                    <img src={Cash}/>
                                    <img src={Visa}/>
                                    <img src={Master}/>
                                </div>
                                <div>
                                    <span>Powered By</span><img src={Nova} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;


