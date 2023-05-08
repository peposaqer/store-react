import React from 'react';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import pet from "../img/Union.png"
import * as Yup from 'yup';
import { useFormik } from "formik";

export default function Profile(){
        const [imagePreview, setImagePreview] = useState(null);
        const filePicekerRef = useRef(null);
        
        function previewFile(e) {
            // Reading New File (open file Picker Box)
            const reader = new FileReader();
            // Gettting Selected File (user can select multiple but we are choosing only one)
            const selectedFile = e.target.files[0];
            if (selectedFile) {
            reader.readAsDataURL(selectedFile);
            }
            // As the File loaded then set the stage as per the file type
            reader.onload = (readerEvent) => {
            if (selectedFile.type.includes("image")) {
                setImagePreview(readerEvent.target.result);
            } 
            };
        }
    return (
        <>
            <div className='profile'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1> <img alt='pet' src={pet} /> My Profile</h1>
                        </div>
                        <div className='col-md-12'>
                            <form noValidate action='#!'>
                                <div className='row'>
                                    <div className='col-md-12 text-center'>
                                        <div className='upload' >
                                            <div className="btn-container">
                                                <input ref={filePicekerRef} accept="image/*" onChange={previewFile} type="file" hidden />
                                                <button className="choose" onClick={() => filePicekerRef.current.click()}>
                                                    <i className="fa-solid fa-camera-retro"></i>
                                                </button>
                                            </div>
                                            <div className="preview">
                                                <div className='ff'
                                                style={{ backgroundImage: `url(${imagePreview} )` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <h2>Main Details</h2>
                                    </div>
                                    <div className='col-md-12'>
                                        <label>User Name</label>
                                        <input
                                            type="text"
                                            placeholder="tom hardy"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        <label>E-mail</label>
                                        <input
                                            type="email"
                                            placeholder="tom@gmail.com"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        <label>Phone</label>
                                        <input
                                            type="number"
                                            placeholder="01565852339"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        <h2>Main Details</h2>
                                    </div>
                                    <div className='col-md-12'>
                                        {/* <label>Full Name</label> */}
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        {/* <label>E-mail</label> */}
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='col-md-12'>
                                        {/* <label>Phone</label> */}
                                        <input
                                            type="password"
                                            placeholder="Confirm New Password"
                                            className="form-contact"
                                        />
                                    </div>
                                    <div className='mt-4 d-flex justify-content-center'>
                                        <button type="submit" className='Contact-us'>Save Chang</button>
                                        <button type="submit" className='Discard'>Discard</button>
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
