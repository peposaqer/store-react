import React from 'react';
import { Link } from "react-router-dom";
import Doctor from "../img/Group 48095576.png"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import Groomers from "../Data/Groomers"
import Testimonial from "../Data/testimonial"
import img from "../img/Union87.png"
import { Navigation } from "swiper";

export default function About(){
    return (
        <>
            <div className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='are'>
                                <h1>~ WHO WE ARE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat. Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus, ac dictum tortor bibendum eu.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie a dui eu volutpat. Proin ligula eros, viverra eget viverra at, elementum eget diam. Phasellus finibus odio risus, ac dictum tortor bibendum eu.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img alt='doctor' src={Doctor} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='swiper'>
                <div className='container'>
                    <h1>Our Groomers</h1>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {Groomers.map((x, index) => (
                            <SwiperSlide key={index} className='gro'>
                                <img alt={x.name} src={x.src} />
                                <div>
                                    <strong>{x.name}</strong>
                                    <span>{x.job}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className='arrows'>
                            <Link to="#!" className="image-swiper-button-prev">
                                <i className="fa fa-arrow-left"></i>
                            </Link>
                            <Link to="#!" className="image-swiper-button-next">
                                <i className="fa fa-arrow-right"></i>
                            </Link>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className='testimonial'>
                <div className='container'>
                    <div className='people'>
                        <h1>What People Say <img alt='img' src={img} /> </h1>
                        <div className='arrows'>
                            <Link to="#!" className="image-swiper-button-prev button-prev">
                                <i className="fa fa-arrow-left"></i>
                            </Link>
                            <Link to="#!" className="image-swiper-button-next button-next">
                                <i className="fa fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev",
                        }}
                        modules={[Navigation]}
                        className="mySwiper2"
                    >
                        {Testimonial.map((x, index) => (
                            <SwiperSlide key={index}>
                                <div className='name'>
                                    <img alt='say' src={x.src}/>
                                    <div>
                                        <ul className='stars'>
                                            <i className={x.star1}></i>
                                            <i className={x.star2}></i>
                                            <i className={x.star3}></i>
                                            <i className={x.star4}></i>
                                            <i className={x.star5}></i>
                                        </ul>
                                        <p>{x.say}</p>
                                        <span>{x.name}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
