import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const CommercialCleaning = () => (
  <Layout>
    <SEO title="Commercial Cleaning" />
    <h1>Office Cleaning</h1>
    <div className="sideBySide">
      <div className="left">
        <h3>A clean office is a productive one</h3>
        <p>We offer competitive rates for workspaces big and small. Our office cleaning services keep your place looking fresh year round, allowing your team to focus on what’s important.</p>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="right">
        <img src="#" alt="" />
      </div>
    </div>
    <section>
      <h4>What We Offer</h4>
      <div className="sideBySide">
        <div className="left">
          <ul>
            <li>Insured and bonded</li>
            <li>No annual contract</li>
            <li>Transparent pricing</li>
            <li>Easy, convenient payment methods (credit/debit or invoicing)</li>
            <li>Consistent, high quality service (employees, no contractors)</li>
            <li>Cleaning supplies and equipment provided</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Custom walk-throughs</li>
            <li>Special attention to client-facing areas (lobby, glass doors, etc.)</li>
            <li>Special attention to VIP offices</li>
            <li>Responsive and prompt customer service</li>
            <li>Timely and professional issue resolution</li>
            <li>Executive access (no middle manager)</li>
            <li>Flexible scheduling (business hours or after hours)</li>
          </ul>
        </div>
      </div>
    </section>

    <div className="callToAction">
      <p>Focus on your business. <br /> Leave the cleaning to us</p>
      <Link to="/contact-us">Contact Us</Link>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout >
)

export default CommercialCleaning;
