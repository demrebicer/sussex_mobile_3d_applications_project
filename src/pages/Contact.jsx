import React, { useRef, useState } from "react";
import "../assets/styles/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1 className="title">Contact Us</h1>

      <div className="form">
        <div className="form-group">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="surname">Surname</label>
              <input type="text" id="surname" name="surname" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="textArea"></textarea>
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
