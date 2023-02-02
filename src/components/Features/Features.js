import React from 'react';
import "../Features/Feature.css";

const Features = () => {
    const images = {
        pic1: require('../../assets/images/pic-1.png'),
        pic2: require('../../assets/images/pic-2.png'),
        pic3: require('../../assets/images/pic-3.png')
    }
    return (
        <>
            <section className="features">
                <div className="feature-row">
                    <div className="feature-col">
                        <img src={images.pic1} alt='pic1' />
                        <h4>Learn Anywhere</h4>
                        <p>Switch between your computers, tablets, or mobile devices.</p>
                    </div>
                    <div className="feature-col">
                        <img src={images.pic2} alt='pic2' />
                        <h4>Expert Teachers</h4>
                        <p>Learn from Industry experts who are passionate about teaching.</p>
                    </div>
                    <div className="feature-col">
                        <img src={images.pic3} alt='pic3' />
                        <h4>Unlimited Access</h4>
                        <p>Choose what do you like to learn from our extensive subscription libraries.</p>
                    </div>
                </div>
                <div className="feature-btn">
                    <div className="line">
                        <span className="line-1"></span> <br />
                        <span className="line-2"></span> <br />
                        <span className="line-3"></span>
                    </div>
                    <button className="common-btn">Start Free Trial</button>
                </div>
            </section>
        </>

    )
}

export default Features