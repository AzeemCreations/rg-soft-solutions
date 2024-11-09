import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>Feel Free To Visit us at our Office to Discuss About Your Needs</h2>
                            <div className="phone-info">
                                <h4>Address:</h4><br />
                                <h4 style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} ><span><i className="fa-solid fa-location-dot"></i></span><span>Samarth Sankul Basement, Konda Lane, Laxmipuri, Kolhapur</span></h4>
                            </div>
                            <div className="phone-info">
                                <h4>For any enquiry, Call Us:</h4><br />
                                <h4 style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} > <span><i className="fa fa-phone"></i> </span><Link href="tel:+919325110270"><span style={{ textDecoration: 'none', color: 'white' }}>+91 93251 10270</span></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form style={{ height: "500px", display: 'flex', justifyContent: 'center' }} id="contact" action="" method="post">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.84561753281417!2d74.22847248192342!3d16.70039264197428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1016a0bc80ae1%3A0x27c57e534e66bcc7!2sSoft-Tech%20Computer%20Training%20Institute!5e0!3m2!1sen!2sin!4v1731148085268!5m2!1sen!2sin" width="90%" height="100%" style={{ border: 0, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}></iframe>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
