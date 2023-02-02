import React from 'react';
import "../Footer/Footer.css";

const Footer = () => {
    const img = {
        logo: require('../../assets/images/logo.png')
    }
    return (
        <>
            <div className="footer">
                <div className="container footer-row">
                    <hr />
                    <div className="footer-left-col">
                        <div className="footer-links">
                            <div className="link-title">
                                <h4>Product</h4>
                                <small>Our Plan</small> <br />
                                <small>Free Trial</small>
                            </div>
                            <div className="link-title">
                                <h4>About Us</h4>
                                <small>Request Demo</small> <br />
                                <small>FAQs</small>
                            </div>
                            <div className="link-title">
                                <h4>Support</h4>
                                <small>Features</small> <br />
                                <small>Contact Us</small>
                            </div>
                            <div className="link-title">
                                <h4>Explore More</h4>
                                <small>Find Non-Profit</small> <br />
                                <small>Free Trial</small>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right-col">
                        <div className="footer-info">
                            <div className="copy-right-text">
                                <small>support@Xypo.com</small> <br />
                                <small>Copyright 2021 Xypo</small>
                            </div>
                            <div className="footer-logo">
                                <img src={img.logo} alt='logo' />
                                <button className="common-btn">English</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer