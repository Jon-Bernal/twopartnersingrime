// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/reset.scss';
import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ContactForm from '../components/ContactForm/ContactForm.js'

import '../styles/pages/contact-us.scss';

const ContactUs = () => (
  <div id="contact-page">
    <Layout>
      <SEO title="Contact Us" />
      <h1>Contact Us</h1>
      <ContactForm />
    </Layout>
  </div>
)

export default ContactUs;
