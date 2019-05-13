import React from "react"

import './Faq.scss';

const Faq = (props) => (
  <div className="faq--container">
    <h4 className="faq--h4">{props.header}</h4>
    <p className="faq--p">{props.question}</p>
  </div>
)

export default Faq