// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/page-styles/index.scss';
import '../styles/reset.scss';

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ContactForm from '../components/ContactForm/ContactForm'
import '../styles/pages/index.scss'

const IndexPage = () => (
  <Layout>
    <div className="above-the-fold">
      <SEO title="Home" keywords={[`maid`, `cleaning`, `commercial`, 'residential', 'janitor', 'janitorial']} />
      <h2 className=".index--h2">Logo goes here</h2>
      <div className="calc-div">
        <h3 className="calc-h3">Quick Estimator</h3>
        <form className="calculator">
          <select name="bedrooms" id="br">
            <option value="none">Bedrooms</option>
            <option value="1br">1 Bedroom</option>
            <option value="2br">2 Bedrooms</option>
            <option value="3br">3 Bedrooms</option>
            <option value="4br">4 Bedrooms</option>
            <option value="5br">5 Bedrooms</option>
            <option value="6br">6 Bedrooms</option>
          </select>
          <select name="bathrooms" id="bath">
            <option value="none">Bathrooms</option>
            <option value="1bath">1 Bathrooms</option>
            <option value="2bath">2 Bathrooms</option>
            <option value="3bath">3 Bathrooms</option>
            <option value="4bath">4 Bathrooms</option>
            <option value="5bath">5 Bathrooms</option>
            <option value="6bath">6 Bathrooms</option>
          </select>
          <select name="cleanLevel" id="cleanlvl">
            <option value="standard">Standard</option>
            <option value="standard">Deep Clean</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
    <div className="sideBySide-container">
      <div className="sideBySide spacing">
        <div className="left">
          <h3>Why Choose <br />Two Partners In Grime?</h3>
        </div>
        <div className="right">
          <p>We are trained to pay attention to details.  We treat your home as if it was our own.  We know you have a busy schedule, so let Two Partners in Grime give you back the freedom to spend time with your family, friends and yourself!</p>
        </div>
      </div>
    </div>
    <div className="horizontal-list">
      <div className="horizontal--list--item">
        <h4 className="horizontal--list--header">Schedule Us</h4>
        <p className="horizontal--list--description">We’re available Monday through Friday.</p>
      </div>
      <div className="horizontal--list--item">
        <h4 className="horizontal--list--header">Let Us In</h4>
        <p className="horizontal--list--description">Whether it’s a doorman or a friend, or give us a key, all we need is the door unlocked.</p>
      </div>
      <div className="horizontal--list--item">
        <h4 className="horizontal--list--header">We Clean</h4>
        <p className="horizontal--list--description">We customize to your cleaning needs. Add ons available.</p>
      </div>
      <div className="horizontal--list--item">
        <h4 className="horizontal--list--header">Rinse & Repeat</h4>
        <p className="horizontal--list--description">Schedule recurring cleans to keep your place always looking fresh.</p>
      </div>
    </div>
    <div className="actionCall--container">
      <div className="actionCall--img"></div>
      <div className="actionCall--div">
        <h3 className="actionCall-title">Are you a commercial space?</h3>
        <Link className='actionCall--link' to="/commercial-cleaning"><i class="fas fa-arrow-left"></i> Learn More</Link>
      </div>
    </div>
    <div className="contact--section">
      <h3>Ready for more free time? <br /> Contact us Today!</h3>
      <ContactForm />
    </div>

  </Layout>
)

export default IndexPage
