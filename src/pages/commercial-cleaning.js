// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/reset.scss';
import React from "react"
import { Link } from "gatsby"

// components
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

// styling
import "../styles/pages/commercial-cleaning.scss"
import cart from "../images/cart.svg"

const CommercialCleaning = () => (
  <Layout>
    <div id="commercial-cleaning">
      <SEO title="Commercial Cleaning" />
      <div className="above-the-fold">
        <div className="container">
          <div className="left left-content">
            <h2>A clean office is a productive one</h2>
            <p>
              We offer competitive rates for workspaces big and small. Our office
              cleaning services keep your place looking fresh year round, allowing
              your team to focus on what’s important.
            </p>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <section className="weOffer">
        <h4>What We Offer</h4>
        <div className="sideBySide">
          <div className="left">
            <ul>
              <li>Insured and bonded</li>
              <li>No annual contract</li>
              <li>Transparent pricing</li>
              <li>
                Easy, convenient payment methods (credit/debit or invoicing)
              </li>
              <li>
                Consistent, high quality service (employees, no contractors)
              </li>
              <li>Cleaning supplies and equipment provided</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Custom walk-throughs</li>
              <li>
                Special attention to client-facing areas (lobby, glass doors,
                etc.)
              </li>
              <li>Special attention to VIP offices</li>
              <li>Responsive and prompt customer service</li>
              <li>Timely and professional issue resolution</li>
              <li>Executive access (no middle manager)</li>
              <li>Flexible scheduling (business hours or after hours)</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="actionCall--container">
        <div className="actionCall--img"></div>
        <div className="actionCall--div">
          <h3 className="actionCall-title">Focus on your business. <br /> Leave the cleaning to us</h3>
          <Link className='actionCall--link' to="/contact-us"> contact Us <i class="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default CommercialCleaning
