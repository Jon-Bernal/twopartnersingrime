import React from "react"

const ContactForm = () => (
  <div className="contact--div">
    <form method="POST" action="https://formspree.io/jrb2801@yahoo.com">
      <input type="email" name="email" placeholder="Your email" />
      <input type="text" name="name" placeholder="Your Name" />
      <input type="tel" name="telephone" placeholder="Your Telephone Number" />
      <textarea name="message" placeholder="How can we help you?"></textarea>
      <button className="contactSubmit" type="submit">Send</button>
    </form>
  </div>
)

export default ContactForm
