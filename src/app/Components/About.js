import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src="assets/images/about-left-image.png" width="100%" height="auto" alt="RG Software Solutions Banner" />
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="services">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="icon">
                                            {/* <img src="assets/images/service-icon-01.png" alt="reporting" /> */}
                                            <i className="fa fa-cart-shopping"></i>
                                        </div>
                                        <div className="right-text">
                                            <h4>ECommerce Solutions</h4>
                                            <p>Creating customized platforms that enhance online shopping.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="icon">
                                            {/* <img src="assets/images/service-icon-02.png" alt="" /> */}
                                            <i className="fa-solid fa-hotel"></i>
                                        </div>
                                        <div className="right-text">
                                            <h4>Hotel Management Apps</h4>
                                            <p> Providing user-friendly applications to simplify hotel operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="icon">
                                            {/* <img src="assets/images/service-icon-03.png" alt="" /> */}
                                            <i className="fa-regular fa-newspaper"></i>
                                        </div>
                                        <div className="right-text">
                                            <h4>Exam Portals</h4>
                                            <p>Designing efficient and secure systems for smooth exam management.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                        <div className="icon">
                                            {/* <img src="assets/images/service-icon-04.png" alt="" /> */}
                                            <i className="fa-solid fa-wallet"></i>
                                        </div>
                                        <div className="right-text">
                                            <h4>Billing & Inventory Software</h4>
                                            <p>Offering comprehensive tools to streamline billing processes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
