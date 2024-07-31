import React from 'react'
import './Navber.css'

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
                    <input type="text" placeholder='search-here' /><button className="search-button"></button>
                </div>
                <div className="user">
                    <button className="user-button"></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navber