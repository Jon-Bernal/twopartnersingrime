import { Link } from "gatsby"
import React from "react"

import './header.scss';

const Header = () => (
  <header>
    <div className="logo">
      <h1 className="logo-h1">
        <Link to="/">Two Partners In Grime</Link>
      </h1>
      <p>Welcome To The Family</p>
    </div>
    <nav>
      <Link className='nav-links' to="/">Home</Link>
      <Link className='nav-links' to="/home-cleaning">Home Cleaning</Link>
      <Link className='nav-links' to="/commercial-cleaning">Commercial Cleaning</Link>
      <Link className='nav-links' to="/faq-page">FAQ</Link>
    </nav>
  </header>
)

export default Header
