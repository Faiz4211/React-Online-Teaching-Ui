import React from 'react';
import "../Header/Header.css";

function Header() {
    const images = {
        logo: require('../../assets/images/logo.png'),
    }
    return (
        <div className='header'>
            <div className="container">
                <img src={images.logo} alt="logo" className="logo" />
                <div className="header-text">
                    <h1>The purpose is to <br /> teach, bring learning to peoples.</h1>
                    <span className="square"></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis quisquam in animi fugiat quibusdam architecto placeat doloremque, molestias eius quis hic labore illo cum repellat dolorem reprehenderit qui ut non, quos facilis assumenda. Rem aperiam voluptatem magnam voluptatum delectus autem possimus ad nemo.</p>
                    <button className="common-btn">Read More</button>
                    <div className="line">
                        <span className="line-1"></span> <br />
                        <span className="line-2"></span> <br />
                        <span className="line-3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;