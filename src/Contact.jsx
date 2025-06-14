import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_3m6dapz',
      'template_5dscu5z',
      e.target,
      'TdDPxbkEmhlJJ3lp0'
    ).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <section className="section">
      <h2 className="title">Contact Me</h2>
      {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="textarea"
          required
        ></textarea>
        <button type="submit" className="button">Send</button>
      </form>
    </section>
  );
}
export default Contact