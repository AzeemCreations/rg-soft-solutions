import React from 'react'

export default function Portfolio() {
    return (
        <div id="portfolio" className="our-portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <h2>See What We <em>Offer</em> and<br />What We <span>Provide</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="hidden-content">
                                    <h4>Web and App Dev</h4>
                                    <p>Using modern technologies like React & Angular.</p>
                                </div>
                                <div className="showed-content">
                                    {/* <img src="assets/images/portfolio-image.png" alt="" /> */}
                                    <i className="fa-solid fa-laptop-code"></i>

                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                <div className="hidden-content">
                                    <h4>Full-Stack Dev</h4>
                                    <p>Emphasize proficiency in both front-end and back-end.</p>
                                </div>
                                <div className="showed-content">
                                    {/* <img src="assets/images/portfolio-image.png" alt="" /> */}
                                    <i className="fa-solid fa-code"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="hidden-content">
                                    <h4>Design & Optimization</h4>
                                    <p>Creating user-friendly responsive designs for websites.</p>
                                </div>
                                <div className="showed-content">
                                    {/* <img src="assets/images/portfolio-image.png" alt="" /> */}
                                    <i className="fa-solid fa-globe"></i>

                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="hidden-content">
                                    <h4>API Integrations</h4>
                                    <p>Secure web and app solutions to cloud platforms.</p>
                                </div>
                                <div className="showed-content">
                                    {/* <img src="assets/images/portfolio-image.png" alt="" /> */}
                                    <i className="fa-solid fa-database"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
