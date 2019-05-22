import React from "react"

import "./Faq.scss"

const Faq = props => (
  <div className="faq--container" onClick={props.faqClickHandler}>
    <h4 className="faq--h4">{props.header}</h4>
    <p className="faq--p hidden">{props.question}</p>
  </div>
)

export default Faq
