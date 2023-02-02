import React from 'react';
import "../SideNav/SideNav.css";

const SideNav = () => {
    const img = {
        menu: require('../../assets/images/menu.png')
    }
    return (
        <>
            <nav className="sideNav">
                <ul>
                    <li><a href="#header">HOME</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#features">FEATURES</a></li>
                    <li><a href="#courses">COURSES</a></li>
                    <li><a href="#offer">OFFER</a></li>
                    <li><a href="#contact-row">CONTACT US</a></li>
                </ul>
            </nav>
            <img src={img.menu} alt="" className="menuBtn"></img>
        </>

    )
}

export default SideNav