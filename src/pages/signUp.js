import React from 'react';
import { Link } from "react-router-dom";
import pet from "../img/Group 12.png"
import logo from "../img/white logo.png"

export default function SignUp(){
    return (
        <>
            <div className='signIn'>
                <div className='logo-white'>
                    <img alt='logo' src={logo} />
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='cat'>
                            <h1>Taking care of your Pet !</h1>
                            <img alt='cat' src={pet} />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='sign-form'>
                            <div className='account'>
                                <h1>Create Account</h1>
                                <div className='sign'>
                                    <button>
                                        <i className="fa-brands fa-google"></i>Sign up with Google
                                    </button>
                                    <button>
                                        <i className="fa-brands fa-facebook"></i>Sign up with Facebook
                                    </button>
                                </div>
                                <p>- OR -</p>
                            </div>
                            <form noValidate action='#!'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        {/* <label>User Name</label> */}
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        {/* <label>E-mail</label> */}
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        {/* <label>Full Name</label> */}
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='mt-4 d-flex justify-content-center'>
                                        <button type="submit" className='view'>Sign up</button>
                                    </div>
                                </div>
                            </form>
                            <div className=''>
                                <p>Already have an account? <Link to="/logIn">Log in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
