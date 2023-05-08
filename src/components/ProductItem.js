import React from "react";
// import offer from "../img/Group 338.svg"
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const { product } = props;

  return (
    <>
      <div className="card">
        <div className="card-body">
            <img src={product.image} alt="s s" />
            <span>{product.title}</span>
            <p>{product.description}</p>
            <div className="card-price">
              <span>{product.price} EGP</span>
              <span className="offer">{product.discount} EGP</span>
            </div>
            <Link to={"/Product/" + product.id} className="buy mt-5">
              Buy Now
            </Link>
        </div>
    </div>
    </>
  );
}
