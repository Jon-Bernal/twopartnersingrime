// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/reset.scss';
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const HomeCleaning = () => (
  <Layout>
    <SEO title="Home Cleaning" />
    <h1>Home Cleaning</h1>
    <div className="sideBySide">
      <div className="left">
        <p>We understand your home is important to you. That’s why we focus on the quality of the clean. Our cleaners aren’t contract workers – they are full-time employees. They care as much as we do.</p>
        <p>On top of that, we know every home is different, so we allow you to give us special requests for those hard to reach places.  Also if you have specific cleaners or tools you own that you want us to use instead of our own, we are happy to do so!</p>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="right">
        <img src="#" alt="" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h4>Dust</h4>
        <ul>
          <li>Lighting Fixtures</li>
          <li>Vents</li>
          <li>TV & other monitors</li>
          <li>Fans</li>
          <li>Door frames</li>
          <li>Picture frames</li>
          <li>Tables & Chairs</li>
          <li>Shelves</li>
          <li>Blinds</li>
        </ul>
      </div>
      <div className="col">
        <h4>Floors and baseboards</h4>
        <ul>
          <li>Vacuum</li>
          <li>Dry mopping</li>
          <li>Wet mopping</li>
        </ul>
      </div>
      <div className="col">
        <h4>Wipe Down</h4>
        <ul>
          <li>Kitchen counters</li>
          <li>Kitchen cabnets (exterior)</li>
          <li>Refrigerator (exterior, including top)</li>
          <li>Table tops</li>
          <li>Bathroom counters</li>
          <li>Bathroom shelves (exterior)</li>
          <li>Shower door</li>
          <li>Shower door</li>
          <li>Shower caddy / soap dish</li>
          <li>Bathroom mirror</li>
          <li>Trashcans (exterior)</li>
          <li>Windowsills</li>
        </ul>
      </div>
      <div className="col">
        <h4>Scrub</h4>
        <ul>
          <li>Stovetop</li>
          <li>Kitchen sink</li>
          <li>Microwaves (inside & out</li>
          <li>Toaster (outside)</li>
          <li>Bathtub / shower</li>
          <li>Bathroom sinks</li>
          <li>Toilet</li>
        </ul>
      </div>
      <div className="col">
        <h4>Misc.</h4>
        <ul>
          <li>Straighten up</li>
          <li>Empty trash and replace liners</li>
          <li>Turn off lights</li>
        </ul>
      </div>
    </div>

    <div className="callToAction">
      <h3>Ready to have more free time?</h3>
      <Link to="/contact-us">Contact Us</Link>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HomeCleaning;
