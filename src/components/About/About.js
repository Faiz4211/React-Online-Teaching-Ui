import React from 'react';
import "../About/About.css";

const About = () => {
    const img = {
        about: require('../../assets/images/about.png')
    }
    return (
        <>
            <div className="about">
                <div className="about-left-col">
                    <img src={img.about} alt='about' />
                </div>
                <div className="about-right-col">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <span className="square"></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, assumenda architecto voluptas
                            voluptatum eius unde, iure quos et corrupti facere quod quia sunt. Eligendi et expedita
                            reprehenderit possimus voluptate facere explicabo officia quis consequatur earum Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit. Dolorum, amet Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis, blanditiis
                            sapiente corporis delectus minima aliquid quos neque temporibus.</p><br /> <br />
                        <div className="line">
                            <span className="line-1"></span> <br />
                            <span className="line-2"></span> <br />
                            <span className="line-3"></span>
                        </div>
                        <h2>"Learning is not attained by chance, it must be sought for with ardor and attended to with
                            diligence."</h2>
                        <h3>----Abigail Adams</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;