import React, { useState } from 'react'
import './Slider.css'
import slider1 from '../assets/slider/slider1.jpg'
import slider2 from '../assets/slider/slider2.jpg'
import slider3 from '../assets/slider/slider3.jpg'
import slider4 from '../assets/slider/slider4.jpg'

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="sliders">
        <img src={slider1} className='image-sliders' />
        <img src={slider2} className='image-sliders' />
        <img src={slider3} className='image-sliders' />
        <img src={slider4} className='image-sliders' />
      </div>
    </div>
  )
}

export default Slider