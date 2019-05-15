import { Link } from "gatsby"
import React from "react"

import './header.scss';

const Header = () => (
  <header>
    <div className="container">
      <div className="logo">
        <h1 className="logo-h1">
          <Link className="logo-link" to="/">Two Partners In Grime</Link>
        </h1>
        <p className="tag-line">Welcome To The Family</p>
      </div>
    </div>
    <nav>
      <div className="container">
        <Link className='nav-links' to="/">Home</Link>
        <Link className='nav-links' to="/home-cleaning">Home Cleaning</Link>
        <Link className='nav-links' to="/commercial-cleaning">Commercial Cleaning</Link>
        <Link className='nav-links' to="/faq-page">FAQ</Link>
        <Link className='nav-links' to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  </header>
)

export default Header
