import React, { useState } from "react";
import "../assets/styles/contact.scss";
import axios from "axios";

import Navbar from "../components/navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // New state to track the submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (!!errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }
    try {
      const response = await axios.post('https://users.sussex.ac.uk/~db596/backend/submit-form', formData);
      console.log('Form submitted successfully', response.data);
      setSubmissionStatus("Your message has been sent successfully."); // Update submission status
      setFormData({ name: "", surname: "", email: "", phone: "", message: "" }); // Reset form data
    } catch (error) {
      console.error('There was an error submitting the form', error);
      setSubmissionStatus("There was an unknown error, please try again later."); // Update submission status with error message
    }
  };

  return (
    <div className="contact">
      <Navbar />

      <h1 className="title">Contact Us</h1>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="surname">Surname</label>
              <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} />
              {errors.surname && <p className="error">{errors.surname}</p>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="textArea" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Send</button>
        </form>
        {submissionStatus && <p className={submissionStatus.startsWith("Your") ? "success-message text-center pt-3" : "error-message text-center pt-3"}>{submissionStatus}</p>}
      </div>
    </div>
  );
}

export default Contact;
