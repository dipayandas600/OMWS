import React from 'react'
import './Navber.css'

const Navber = () => {
  return (
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
            <input type="text" placeholder='search-here' className='search-box' /><button className="search-button"></button>
            <button className="user-button"><img src="" alt="" className='user-icon' /></button>
        </div>
    </div>
  )
}

export default Navber