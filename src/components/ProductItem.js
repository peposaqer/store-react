import React from "react";
import offer from "../img/Group 338.svg"
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const { product } = props;

  return (
    <>
      <div className="card uu">
        <Link to="#!"><img src={offer} className="offer-img" /></Link>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <p>{product.description}</p>
            <div className="card-price">
                <div>
                    <h1>{product.price}<span>LE</span></h1>
                    <div className="d-flex product">
                        <span className="dis">{product.discount}</span>
                        <span className="offer">{product.offer}</span>
                    </div>
                </div>
                <img src={product.brandLogo.default} />
            </div>
            <div className='stars'>
                <img className='star' src={product.star} />
                <img className='star' src={product.star} />
                <img className='star' src={product.star} />
                <img className='star' src={product.star} />
                <img className='star' src={product.starActive} />
                <span className='num'>{product.numOfStars} of 5</span>
            </div>
            <Link to={"/Product/" + product.id} className="buy">
              Buy Now
            </Link>
        </div>
    </div>
    </>
  );
}
