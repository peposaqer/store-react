import React from "react";

export default function Card(props) {
  const { product } = props;

  return (
    <>
        <div className='mb-5'>
            <div className='details'>
                <div className=''>
                    <img src={product.image} className="brand" />
                </div>
                <p>{product.description}</p>
                <h6>{product.gender}</h6>
                <div className='stars'>
                    <img className='star' src={product.star} />
                    <img className='star' src={product.star} />
                    <img className='star' src={product.star} />
                    <img className='star' src={product.star} />
                    <img className='star' src={product.starActive} />
                    <span className='num'>{product.numOfStars} of 5</span>
                    <span className='rate'>{product.numOfRate} Rates</span>
                </div>
                <div className='prices'>
                    <span className='price'>{product.price} <span>LE</span></span>
                    <span className='dis'>{product.discount}</span>
                    <span className='offer'>{product.offer}</span>
                </div>
            </div>
        </div>
    </>
  );
}
