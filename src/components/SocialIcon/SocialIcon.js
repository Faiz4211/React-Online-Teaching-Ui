import React from 'react';
import "../SocialIcon/SocialIcon.css";

const SocialIcon = () => {
    const images = {
        facebook: require('../../assets/images/facebook.png'),
        instagram: require('../../assets/images/instagram.png'),
        twitter: require('../../assets/images/twitter.png'),
        linkedin: require('../../assets/images/linkedin.png'),
    }
    return (
        <>
            <div className="social-icons">
                <img src={images.facebook} alt='facebook' />
                <img src={images.instagram} alt='instagram' />
                <img src={images.twitter} alt='twitter' />
                <img src={images.linkedin} alt='linkedin' />
            </div>
        </>
    )
}

export default SocialIcon