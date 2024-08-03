import React from 'react'
import './Navber.css'
import search from '../assets/search.svg'
import user from '../assets/user.jpg'

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
            
        <div className="search-and-user">
          <div className="search-box">
            <input type="text" placeholder='search-here' /><button className="search-button"><img src={search} className='search-icon' /></button>
          </div>

          <div className="user">
            <button className="user-button"><img src={user} className='user-icon' /></button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navber