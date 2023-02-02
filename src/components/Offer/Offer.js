import React from 'react';
import "../Offer/Offer.css";

const Offer = () => {
    const images = {
        offer: require('../../assets/images/offer.png')
    }

    return (
        <>
            <div className="offer">
                <div className="about-left-col">
                    <img src={images.offer} alt='offer' />
                </div>
                <div className="about-right-col">
                    <div className="about-text">
                        <h1>Limitless Learning, <br />Limitless Possibilities</h1>
                        <span className="square"></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, assumenda architecto voluptas
                            voluptatum eius unde, iure quos et corrupti facere quod quia sunt. Eligendi et expedita
                            reprehenderit possimus voluptate facere explicabo officia quis consequatur earum Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit.</p>
                        <button className="common-btn">Start Free Trial</button>
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

export default Offer;