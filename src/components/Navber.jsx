import React from 'react'
import './Navber.css'

const Navber = () => {
  return (
    <header className="header">
        <nav className="navber">
            <h1 className="logo">OMWS</h1>

            <ul className="navber-links">
                <li>Home</li>
                <li>Series</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>My Lists</li>
                <li>Gondras</li>
            </ul>
            
            <div className="user">
                <div className="search-box">
                    
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navber