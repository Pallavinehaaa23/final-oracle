import React from 'react'
import { FaInstagram,FaFacebook,FaWhatsapp,FaTwitter, FaLinkedin } from 'react-icons/fa'

import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>WE-HIRE</span></h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <FaFacebook/>
                             <FaTwitter/>
                               <FaInstagram/>
                               <FaLinkedin/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i>+91-8765434568</p>
                            <p><i class="fa-solid fa-envelope"></i>we-hire@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i>Bhubneswar,odisha</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>we-hire pvt limited</p>
            </div>
        </>
    )
}

export default Footer