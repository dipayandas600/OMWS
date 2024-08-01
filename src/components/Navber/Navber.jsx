import React from 'react'
import './Navber.css'
import search from '../../assets/search.svg'
import image from '../../assets/image.jpg'

const Navber = () => {
  return (
    <div className="header">
        <div className="navber">
            <div className="right-side">
                <h1 className="logo">OMWS</h1>
            </div>
            
            <div className="meddle">
                <ul className="navber-links">
                    <li>Home</li>
                    <li>Series</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>My Lists</li>
                    <li>Gondras</li>
                </ul>
            </div>
            
            <div className="left-side">
                <div className="search-box">
                    <input type="text" placeholder='search-here' /><button className="search-button"><img src={search} className='search-icon' /></button>
                </div>
                <div className="user">
                    <button className="user-button"><img src={image} className='user-icon' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navber