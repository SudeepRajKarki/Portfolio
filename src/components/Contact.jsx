import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing again
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Use EmailJS sendForm (recommended for forms)
    emailjs
      .sendForm(
        'service_3m6dapz',       // Your EmailJS service ID
        'template_5dscu5z',      // Your EmailJS template ID
        e.target,                // The form element
        'TdDPxbkEmhlJJ3lp0'      // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Success: ', result.text);
          setLoading(false);
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setTimeout(() => setSubmitted(false), 5000); // Auto-hide success after 5s
        },
        (error) => {
          console.error('Error: ', error);
          setLoading(false);
          setError('❌ Failed to send message. Please try again or email me directly.');
        }
      );
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16" id="contact">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Contact Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Contact Info */}
        <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-2">
            📬 Get in Touch
          </h3>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="text-xl mt-1">📧</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Email</strong>
                <br />
                <a
                  href="mailto:sudeepkarkee3@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  sudeepkarkee3@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl mt-1">📱</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Phone</strong>
                <br />
                <a
                  href="tel:+9779862083800"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  +977-9862083800
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl mt-1">📍</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Location</strong>
                <br />
                <span className="text-gray-700 dark:text-gray-300">Kathmandu, Nepal</span>
              </div>
            </li>
          </ul>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic">
            Open to freelance work, tech collaborations, and open-source contributions.
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col"
          onSubmit={handleSubmit}
        >
          {/* Success Message */}
          {submitted && (
            <div className="mb-6 p-4 text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-200 rounded-md font-medium flex items-center gap-2 border border-green-200 dark:border-green-800">
              ✅ Thank you! I'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-200 rounded-md font-medium border border-red-200 dark:border-red-800">
              {error}
            </div>
          )}

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="mb-4 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="mb-4 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            disabled={loading}
            className="mb-4 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-70"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;