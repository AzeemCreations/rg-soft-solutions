import React from 'react'

export default function Services() {
    return (
        <div id="services" className="our-services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="left-image">
                            <img src="assets/images/services-left-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="section-heading">
                            <h2><em>Innovate</em> and <span>Elevate</span> with RG Software Solutions</h2>
                            <p>RG Software Solutions offers comprehensive digital services, from custom eCommerce platforms to robust billing and inventory software. Whether you need tailored hotel management applications or advanced exam portals, our expertise ensures seamless, efficient, and user-friendly solutions. Partner with us to optimize your business with innovative technology and exceptional support. Contact us today for your custom project requirements!</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="first-bar progress-skill-bar">
                                    <h4>Technical Expertise</h4>
                                    <span>95%</span>
                                    <div className="filled-bar"></div>
                                    <div className="full-bar"></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="second-bar progress-skill-bar">
                                    <h4>Innovation & Creativity</h4>
                                    <span>88%</span>
                                    <div className="filled-bar"></div>
                                    <div className="full-bar"></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="third-bar progress-skill-bar">
                                    <h4>Support & Maintenance</h4>
                                    <span>90%</span>
                                    <div className="filled-bar"></div>
                                    <div className="full-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
