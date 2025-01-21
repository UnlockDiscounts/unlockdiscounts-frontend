import React from 'react'
import '../styles/Slider.css'
import "../App.css";
import amazon from '../assets/amazon.png'
import ajio from '../assets/ajio.png'
import book from '../assets/bookmy.png'
import meesho from '../assets/meesho.png'
import myntra from '../assets/Myntra-Logo-New.png'
import flipkart from '../assets/flipkart.png'
// import udemy from '../assets/udemy.png'
import nykaa from '../assets/nykaa.png'
import course from '../assets/coursera.png'
// import amazon from "../assets/amazon.png";
// import myntra from "../assets/myntra.png";
// import meesho from "../assets/meesho.png";
// import flipkart from "../assets/flipkart.png";
// import ajio from "../assets/ajio.png";

const Slider = () => {
  return (
    // <div className='wrapper'>
    <div className='slider'>
        <div className='slider-logo'>
            <img src={amazon} alt="" />
            <img src={ajio} alt="" />
            <img src={meesho} alt="" />
            <img src={flipkart} alt="" />
            <img src={myntra} alt="" />
            <img src={nykaa} alt="" /> 
            {/* <img src={udemy} alt="" /> */}
            <img src={course} alt="" />
            <img src={book} alt="" /> 
        </div>
        <div className='slider-logo1'>
            <img src={amazon} alt="" />
            <img src={ajio} alt="" />
            <img src={meesho} alt="" />
            <img src={flipkart} alt="" />
            <img src={myntra} alt="" />
            <img src={nykaa} alt="" />
            {/* <img src={udemy} alt="" /> */}
            <img src={course} alt="" />
            <img src={book} alt="" />
        </div>
    </div>
    // </div>
  )
}
export default Slider;