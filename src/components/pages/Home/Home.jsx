import React from 'react'
import './Home.css'
import Navber from '../../Navber/Navber'
import slider from '../../../assets/slider/slider.jpg'

const Home = () => {
  return (
    <>
      <Navber/>
      <div className="slider-container">
        <img src={slider} className='slider-image' />
      </div>
    </>
  )
}

export default Home