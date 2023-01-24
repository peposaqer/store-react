import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Sort extends Component {

    render() {
        return (
            <div className='black'>
                <div className='container'>
                    <div className='sort'>
                        <Link to="#!" >Men</Link>
                        <Link to="#!" >Women</Link>
                        <Link to="#!" >Unisex</Link>
                        <Link to="#!" >Kids</Link>
                        <Link to="#!" >Best Sellers</Link>
                        <Link to="#!" >New Arrivals</Link>
                        <Link to="#!" className='offer-page' >Offers</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Sort;


