import React from 'react';
import { Link } from "react-router-dom";
import pet from "../img/Group 12.png"
import logo from "../img/white logo.png"

export default function LogIn(){
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
                                <h1>Sign In</h1>
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
                                        <button type="submit" className='view'>Sign in</button>
                                    </div>
                                </div>
                            </form>
                            <div className=''>
                                <p>Don’t have an account? <Link to="/signUp">Sign up</Link></p>
                                <p>Forget Password ? <Link to="/forgetPassword">Click here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
