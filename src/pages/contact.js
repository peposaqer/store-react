import React from 'react';
import { Link } from "react-router-dom";
import pet from "../img/Union.png"
import * as Yup from 'yup';
import { useFormik } from "formik";

export default function Contact(){

    const { handleSubmit, errors, touched } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            Phone: '',
            help: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(3, 'Min. 3 characters').required('Required'),
            email: Yup.string().email('It should be a valid email').required('Required'),
            Phone: Yup.string().min(11, 'Min. 11 characters').required('Required'),
            help: Yup.string().min(20, 'Min. 20 characters').required('Required'),
        }),
        onSubmit: values => {
            // TODO: some action
        }
    });
    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1> <img alt='pet' src={pet} /> Contact Us</h1>
                            <p>The experienced veterinarians provide comprehensive veterinary care for cats, dogs, and exotic pets including reptiles.</p>
                        </div>
                        <div className='col-md-7'>
                            <form noValidate onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                    <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-contact"
                                        />
                                        {(touched.fullName && errors.fullName) && <span className="error">{errors.fullName}</span>}
                                    </div>
                                    <div className='col-md-12'>
                                    <label>E-mail</label>
                                        <input
                                            type="email"
                                            placeholder=""
                                            className="form-contact"
                                        />
                                        {(touched.email && errors.email) && <span className="error">{errors.email}</span>}
                                    </div>
                                    <div className='col-md-12'>
                                    <label>Phone</label>
                                        <input
                                            type="number"
                                            placeholder=""
                                            className="form-contact"
                                        />
                                        {(touched.Phone && errors.Phone) && <span className="error">{errors.Phone}</span>}
                                    </div>
                                    <div className='col-md-12'>
                                    <label>Massage</label>
                                        <textarea
                                            type="text"
                                            rows={5}
                                            placeholder=""
                                            className="form-contact"
                                        />
                                        {(touched.help && errors.help) && <span className="error">{errors.help}</span>}
                                    </div>
                                    <div className='mt-4'>
                                        <button type="submit" className='Contact-us'>Contact Us</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-5 overflow-hidden'>
                            <div className='map'></div>
                            <div className="google-map">
                                <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=87%20%D9%90%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%20%D8%A3%D8%AD%D9%85%D8%AF%20%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%20%D8%AD%D9%8A%20%D8%A7%D9%84%D9%85%D9%84%D8%AA%D9%82%D9%89%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B4%D9%8A%D8%B1%D8%A7%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%B1,%20%D9%85%D8%B3%D8%A7%D9%83%D9%86%20%D8%B4%D9%8A%D8%B1%D8%A7%D8%AA%D9%88%D9%86,%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC%2011799+(Master%20Group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='base'>
                                <div>
                                    <h1>Contact</h1>
                                    <a href='mailto: info@Pet.com'>info@Pet.com</a>
                                </div>
                                <div>
                                    <h1>Based In</h1>
                                    <a href='#!'>Cairo, Egypt</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='social'>
                                <h1>Social</h1>
                                <a href='#!'><i className="fa-brands fa-facebook-f"></i></a>
                                <a href='#!'><i className="fa-brands fa-twitter"></i></a>
                                <a href='#!'><i className="fa-brands fa-instagram"></i></a>
                                <a href='#!'><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
