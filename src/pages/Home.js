import React from 'react';
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../Api/products";
import Cat from "../img/pexels-anna-shvets-4588018 copy.png"
import Cat3 from "../img/pexels-anna-shvets-4588018 copy 2.png"
import Cat2 from "../img/front-view-cute-dog-with-scarf 2.png"
import Dog from "../img/pexels-anna-shvets-4588018.png"
import Dog1 from "../img/Group 48095579.png"
import Gallery from "../Data/gallery"
import service1 from "../img/Group 48095583.png"
import service2 from "../img/Group 48095584.png"
import service3 from "../img/Group 48095585.png"
import service4 from "../img/Group 48095586.png"

export default class Home extends React.Component{
    state = {
        products: [],
    };

    componentDidMount() {
        ProductsApi.getAll().then((data) => {
        this.setState({
            products: data,
        });
        });
    }
    render() {
        return (
            <>
                <div className='header'>
                    {/* <div className='container'> */}
                        <div className='row '>
                            <div className='col-md-5 position-relative'>
                                <div className='cat'>
                                    <div className='cute'>
                                        <img src={Cat2} alt='cat' className='cute-cat' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='take'>
                                    <h1>We take care of your pet and help them to grow</h1>
                                    <p>Pets is chain of modern clinics to cater to all your pet needs such as wellness, consultations, grooming and nutrition.</p>
                                    <Link to="/about" className='explore'>Explore more</Link>
                                    <h2>How to take care <br /> <span>perfect one you will like it. It’s our promise.</span></h2>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <div className='us'>
                    <div className='container'>
                        <div>
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat. Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus, ac dictum tortor bibendum eu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat. Proin ligula eros, viverra eget viverra at, elementum eget diam.</p>
                            <Link to="/about" className='explore'>Explore more</Link>
                        </div>
                    </div>
                </div>
                <div className='services'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h1>OUR SERVICES</h1>
                                <span>All Pet Care Services</span>
                            </div>
                            <div className='col-lg-3 col-md-4'>
                                <div className='service'>
                                    <img src={service1} alt='sr' />
                                    <h2>Vaccination</h2>
                                    <p>Perfect one you will like it. It’s our promise.</p> 
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 mt-5'>
                                <div className='service'>
                                    <img src={service2} alt='sr' />
                                    <h2>Pet Grooming</h2>
                                    <p>Perfect one you will like it. It’s our promise.</p> 
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4'>
                                <div className='service'>
                                    <img src={service3} alt='sr' />
                                    <h2>Surgeries</h2>
                                    <p>Perfect one you will like it. It’s our promise.</p> 
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 mt-5'>
                                <div className='service'>
                                    <img src={service4} alt='sr' />
                                    <h2>Emergency care</h2>
                                    <p>Perfect one you will like it. It’s our promise.</p> 
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div className='explore-button'>
                                    <Link to="/services" className='explore'>Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products'>
                    <div className='container'>
                        <h2>Pets Nutrients & Food </h2>
                        <div className='all'>
                            <h1>25 % OFF all Products </h1>
                            <Link to="/products" className='view'>View More <i className='fa fa-arrow-right'></i></Link>
                        </div>
                        <div className='row'>
                            {this.state.products.filter((d) => d.selected === true).map((product) => (
                                <div className={"col-lg-4 col-md-6"} key={product.id}>
                                    <ProductItem product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='Facilities'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h1>Facilities we provides</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div className='col-md-4'>
                                <div className='we'>
                                    <div className='provides'>
                                        <h2>Feed Training</h2>
                                        <p>Ut enim ad minim  velit esse cillum dolore eu fugiat..</p>
                                    </div>
                                    <div className='provides'>
                                        <h2>Health test</h2>
                                        <p>tempor incididunt ut labore et dolore magna aliqua...</p>
                                    </div>
                                    <div className='provides'>
                                        <h2>Vaccination</h2>
                                        <p>tempor incididunt ut labore et dolore magna aliqua...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className=''>
                                    {/* <img alt='dog' src={Dog1} />  */}
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='we'>
                                    <div className='provides'>
                                        <h2>Overnight Care</h2>
                                        <p>Ut enim ad minim  velit esse cillum dolore eu fugiat..</p>
                                    </div>
                                    <div className='provides'>
                                        <h2>Medical Care</h2>
                                        <p>Ut enim ad minim  velit esse cillum dolore eu fugiat..</p>
                                    </div>
                                    <div className='provides'>
                                        <h2>Traning Facility</h2>
                                        <p>Ut enim ad minim  velit esse cillum dolore eu fugiat..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 text-center mb-5'>
                                <h1>Our Gallery</h1>
                                <p>Our Client Pets, as well as a Gallery with some nice pictures.</p>
                            </div>
                            {Gallery.map((x, index) => (
                                <div className='col-lg-4 col-md-6' key={index}>
                                    <img alt={x.id} src={x.src} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='dog'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img alt='Dog' src={Dog} />
                            </div>
                            <div className='col-md-8'>
                                <div>
                                    <h1>Pet Grooming Service</h1>
                                    <ul>
                                        <li>Bathing – wash and fluff dry</li>
                                        <li>Pawdicure – nail trimming and filing</li>
                                        <li>Breed specific styling, cutting and stripping</li>
                                        <li>De-matting and detangling</li>
                                    </ul>
                                    <Link to="/services" className='view'>Our Services</Link>
                                </div>
                            </div>
                            <img alt='' src={Cat} className='cat1' />
                            <img alt='' src={Cat3} className='cat3' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
