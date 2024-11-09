import React from 'react';
import logo from "../../../public/assets/images/rg-software-solutions-logo.png";
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link href="/" className="logo">
                                <img src={logo.src} alt="" style={{ width: '250px', height: '60px', objectFit: "contain" }} />

                            </Link>
                            <ul className="nav">
                                <li className="scroll-to-section">
                                    <Link href="#top" className="active">
                                        Home
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="#about">
                                        About Us
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="#services">
                                        Services
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="#portfolio">
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <div className="main-red-button">
                                        <Link href="#contact">
                                            Contact Now
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <div className="menu-trigger">
                                <span>Menu</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
