import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
                        <p>© Copyright 2024 RG Software Solutions All Rights Reserved.

                            <br />Design: <Link rel="nofollow" href="/">RG Software Solutions</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
