import React from 'react';
import { Link } from "react-router-dom";
import Care from "../Data/services"
import pet from "../img/Union.png"

export default function Services(){
    return (
        <>
            <div className='best'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center mb-5'>
                            <h1> <img alt='pet' src={pet} /> Our Services</h1>
                            <span>Best pets are waiting for adoption. Find out the the perfect one you will like it. It's our promise.</span>
                        </div>
                        {Care.map((x, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <Link to={`/ServiceItem/${x.id}`}>
                                    <div className='pet'>
                                        <div>
                                            <img src={x.src} alt={x.name} />
                                            <span>{x.name}</span>
                                            <p>{x.description}</p>
                                        </div>
                                        <strong>Get Service <i className='fa fa-arrow-right'></i></strong>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
