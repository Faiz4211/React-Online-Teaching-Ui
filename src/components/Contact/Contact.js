import React from 'react';
import "../Contact/Contact.css";

const Contact = () => {
    const images = {
        contact: require('../../assets/images/contact.png')
    }
    return (
        <>
            <div className="contact-row">
                <div className="container contact-row">
                    <div className="contact-left-col">
                        <h1>SignUp To Join Our<br />Learning Community</h1>
                        <form>
                            <input type="Name" placeholder="Enter Your Name" />
                            <input type="Email" placeholder="Enter Your Email" />
                            <input type="Password" placeholder="Enter Your Password" />
                            <div className="btn-box">
                                <button className="common-btn">SignUp</button>
                                <button className="common-btn">Start Free Trial</button>
                            </div>
                        </form>
                        <div className="line">
                            <span className="line-1"></span> <br />
                            <span className="line-2"></span> <br />
                            <span className="line-3"></span>
                        </div>
                    </div>
                    <div className="contact-right-col">
                        <img src={images.contact} alt='contact' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact