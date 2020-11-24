import React from "react";
import "../../App.css";

export default function ContactMe() {
  return (
    <h1 className="contact-me">
      <h1 className="contact-title"></h1>
      <h1 className="contact-forum"> Contact Me
        <h1 className="contact-name">
          <form>
            <input
              className="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              
            />
          </form>
        </h1>
        <h1 className="contact-email">
          <form>
            <input
              className="contact-email"
              name="email"
              type="text"
              placeholder="Your Email"
            />
          </form>
        </h1>
        <h1 className="contact-message">
          <form>
            <input
              className="contact-message"
              name="Message"
              type="text"
              placeholder="Your Message"
              maxLength = "inf"
              size="20"
            />
          </form>
        </h1>
        <div className='contact-btn'>
        <button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          > Send
        </button>
        </div>

      </h1>
    </h1>
  );
}
