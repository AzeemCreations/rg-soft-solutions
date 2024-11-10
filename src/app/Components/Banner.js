import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <h6 style={{ color: "#1D3BA9" }}>Welcome to RG Software Solutions</h6>
                                    <h2>Crafting Your <em>Digital</em><span> Future</span></h2>
                                    <p>At RG Software Solutions, we specialize in transforming your ideas into reality with our expertise in web development and app development. Whether it’s building robust eCommerce platforms, intuitive hotel management apps, dynamic exam portals, or comprehensive billing and inventory software, our solutions are designed to meet the unique needs of your business. Trust us to elevate your digital presence and streamline your operations with innovative, reliable, and cutting-edge technology.</p>
                                    <fieldset>
                                        <button href="#about" style={{ backgroundColor: "#1D3BA9", padding: "10px 40px", color: 'white', borderRadius: '35px', border: 'none' }}>Explore More</button>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="/assets/images/rg-banner.jpg" width="100%" height="auto" alt="RG Software Solutions Banner" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
