import React from 'react'
import logo from "../../../public/assets/images/rg-software-solutions-logo.png"

export default function Navbar() {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                {/* <h4>RG<span>Software Solutions</span></h4> */}
                                <img src={logo.src} alt="" style={{ width: '250px', height: '60px', objectFit: "contain" }} />
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                <li className="scroll-to-section"><a href="#about">About Us</a></li>
                                <li className="scroll-to-section"><a href="#services">Services</a></li>
                                <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
                                <li className="scroll-to-section"><div className="main-red-button"><a href="#contact">Contact Now</a></div></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
