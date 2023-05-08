import React from 'react';
import { Link } from "react-router-dom";
import pet from "../img/Group 12.png"
import logo from "../img/white logo.png"

export default function Verify(){
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
                                <h1>Verify code</h1>
                            </div>
                            <form noValidate action='/logIn'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        {/* <label>E-mail</label> */}
                                        <input
                                            type="number"
                                            placeholder=""
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='mt-4 d-flex justify-content-center'>
                                        <button type="submit" className='view'>Verify</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
