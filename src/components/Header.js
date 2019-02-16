import React from 'react'
import {Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
        <h1 className="logo">Booklover</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
    </header>
  )
}
