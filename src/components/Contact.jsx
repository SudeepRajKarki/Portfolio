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
    <section className="max-w-5xl mx-auto px-6 py-12">
     <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-10">
       <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
         <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Get in Touch</h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300">
            <strong>Email:</strong>{' '}
             <a href="mailto:sudeepkarkee3@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
               sudeepkarkee3@gmail.com
             </a>
          </p>
          <p className="mb-2 text-gray-800 dark:text-gray-300">
            <strong>Phone:</strong>{' '}
            <a href="tel:+9779862083800" className="text-blue-600 dark:text-blue-400 hover:underline">
              +977-9862083800
            </a>
         </p>
         <p className="mb-6 text-gray-800 dark:text-gray-300">
          <strong>Location:</strong> Kathmandu, Nepal
         </p>
         <p className="text-gray-600 dark:text-gray-400 italic">
          Feel free to contact me for freelance work, collaboration, or questions.
        </p>
    </div>

    <form className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col" onSubmit={handleSubmit} >
     {submitted && (
       <p className="mb-4 text-green-600 dark:text-green-400 font-semibold">
         ✅ Thank you! Your message has been sent.
      </p>
    )}

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="mb-4 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="mb-4 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      rows="5"
      required
      className="mb-4 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    ></textarea>
     <button
       type="submit"
       className="bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold" >Send
      </button>
     </form>
   </div>
</section>
);
}

export default Contact;
