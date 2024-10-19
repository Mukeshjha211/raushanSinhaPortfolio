import React, { useState } from 'react';
import './Contact.css'; // We'll add this later

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to an API
    alert('Message sent!');
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:aniket@example.com">raushanSinha@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/raushansiha" target="_blank" rel="noopener noreferrer">linkedin.com/in/raushansiha</a></p>
      </div>
    </section>
  );
};

export default Contact;
