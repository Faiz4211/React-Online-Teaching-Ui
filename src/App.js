import React from 'react'
import Header from '../src/components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import SideNav from './components/SideNav/SideNav';
import "./App.css";
import Contact from './components/Contact/Contact';
import Offer from './components/Offer/Offer';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import SocialIcon from './components/SocialIcon/SocialIcon';

const App = () => {
  return (
    <>
      <Header />
      <SideNav />
      <About />
      <Features />
      <Courses />
      <Offer />
      <Contact />
      <Footer />
      <SocialIcon />
    </>
  )
}

export default App