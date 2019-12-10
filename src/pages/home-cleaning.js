import "../styles/reset.scss"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../styles/pages/home-cleaning.scss"

const HomeCleaning = () => (
  <Layout>
    <div id="home-cleaning">
      <SEO title="Home Cleaning" />
      <div className="above-the-fold">
        <div className="container">
          <div className="left">
            {/* <h2>Refresh your home</h2> */}
            {/* <p>We understand your home is important to you. That’s why we focus on the quality of the clean. Our cleaners aren’t contract workers – they are full-time employees. They care as much as we do.</p>
            <p>On top of that, we know every home is different, so we allow you to give us special requests for those hard to reach places.  Also if you have specific cleaners or tools you own that you want us to use instead of our own, we are happy to do so!</p> */}
            <h2>House Cleaning</h2>
            <p>
              Our cleaning artists go the extra mile on every job because they
              care as much as you do about your beautiful home! On top of that,
              we know every home / client has different needs so we customize
              your house cleaning to your specific needs. Also if you have a
              specific cleaner or tools you own that you want us to use instead
              of our own, we are happy to do so!{" "}
            </p>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <section className="checklist">
        <h4 className="checklist--h4">Our Checklist</h4>
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
              <li>Empty trash and replace liners</li>
              <li>Turn off lights</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="actionCall--container">
        <div className="actionCall--img" />
        <div className="actionCall--div">
          <h3 className="actionCall-title">Ready to have more free time?</h3>
          <Link className="actionCall--link" to="/contact-us">
            {" "}
            contact Us <i class="fas fa-long-arrow-alt-right" />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default HomeCleaning
