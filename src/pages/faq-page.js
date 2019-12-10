// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/reset.scss"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Faq from "../components/Faq/Faq.js"

import "../styles/pages/faq-page.scss"

const list = [
  {
    header: "Does someone need to be present?",
    question:
      "Whether or not you're present while we clean is entirely up to you",
  },
  {
    header: "Are you insured and bonded?",
    question:
      "Yes, Two Partners In Grime is both insured and bonded.  We understand that it is our privilege to be in your home or business and we always treat it with care.",
  },
  {
    header: "Do I need to provide cleaning supplies?",
    question:
      "We bring all of our own cleaning supplies, however if you have a specific product or tool you would prefer that we use, let us know and we are happy to customize our cleaning process to what is best for you and your family or business.",
  },
  {
    header: "Is there manager oversight?",
    question:
      "Absolutely. Two Partners In Grime takes pride in our quality control. Either the Owner or our Quality Control Manager typically joins the cleaners on their first four months of cleaning and follows up periodically, by email and in person, to make sure we consistently do a great job.",
  },
  {
    header: "Why get your office cleaned?",
    question:
      "Studies have shown that office cleanliness plays a vital role in preventing illness in the work place.  A clean work place makes for more productive workers.",
    // "We understand that a clean work space can reduce the likelihood of employees getting sick, and thus being more productive.  A clean work space has been shown to reduce the chance of catching a cold by 80%!",
  },
  {
    header: "Do you clean during or after business hours?",
    question:
      "Yes! Many customers give us a key or a code for after hours cleaning.  So we can clean without disrupting your work - Two Partners in Grime will always stay in touch with your office manager.",
  },
  {
    header:
      "Does Two Partners In Grime bring it's own supplies and equipment for commercial spaces?",
    question:
      "Yes, all of our cleaners come outfitted with a full kit of cleaning supplies & equipment to bring on site.",
  },
]

const faqPage = () => (
  <div id="faq">
    <Layout>
      <SEO title="Page two" />
      <h1 className="faq-h2">FAQ</h1>
      <div className="faq-list">
        {list.map(item => {
          return (
            <Faq
              header={item.header}
              key={item.header}
              question={item.question}
              faqClickHandler={faqClickHandler}
            />
          )
        })}
        <div className="faq--container" onClick={faqClickHandler}>
          <h4 className="faq--h4">How do I get an office cleaning quote?</h4>
          <p className="faq--p hidden">
            Just <Link to="/">contact us</Link> to get started!
          </p>
        </div>
      </div>
    </Layout>
  </div>
)

function faqClickHandler(e) {
  console.log(e.currentTarget.children)
  const el = e.currentTarget
  el.children[0].classList.toggle("roundBottom")
  for (let i = 1; i < e.currentTarget.children.length; i++) {
    e.currentTarget.children[i].classList.toggle("hidden")
  }
}

export default faqPage
