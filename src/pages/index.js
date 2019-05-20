import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ContactForm from '../components/ContactForm/ContactForm'

import '../styles/page-styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`maid`, `cleaning`, `commercial`, 'residential', 'janitor', 'janitorial']} />
    <h2>We Clean. You Relax.</h2>
    <div className="sideBySide spacing">
      <div className="left">
        <h3>Why Choose <br />Two Partners In Grime?</h3>
      </div>
      <div className="right">
        <p>Cleaning’s no fun.  In fact, it’s time-consuming, dirty, and can involve a bruised knee or two. Luckily for you, we love to clean. It’s basically all we do. Get your day and knees back, call us to make your place shine like never before.</p>
        <p>In the rare event you’re not satisfied with the quality of the service, we will make it right.</p>
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
        <p className="horizontal--list--description">We rigorously cover our checklist. Add-ons available.</p>
      </div>
      <div className="horizontal--list--item">
        <h4 className="horizontal--list--header">Rinse & Repeat</h4>
        <p className="horizontal--list--description">Schedule recurring cleans to keep your place always looking fresh.</p>
      </div>
    </div>

    <div className="actionCall--div">
      <h3 className="">Are you a commercial space?</h3>
      <Link className='actionCall--link' to="/commercial-cleaning">Learn More</Link>
    </div>
    <div className="contactSection">
      <h3>Ready for more free time? <br /> Contact us Today!</h3>
      <ContactForm />
    </div>

  </Layout>
)

export default IndexPage
