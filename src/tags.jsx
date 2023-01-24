import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Tags extends Component {

    render() {
        return (
            <div className='tags'>
                <div className='container'>
                    <div className='tag'>
                        <Link to="#!" >Men / </Link>
                        <Link to="#!" >Clothing / </Link>
                        <Link to="#!" >Tops / </Link>
                        <Link to="#!" >Adidas / </Link>
                        <Link to="#!" >Adidas Black T-Shirt</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Tags;


