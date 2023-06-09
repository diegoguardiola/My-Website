import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import emailjs from 'emailjs-com';



const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = () => {
  setLoading(true);

  emailjs
    .send(
      "service_3mjfb0c", // Replace with your EmailJS service ID
      "template_e3l492r", // Replace with your EmailJS template ID
      {
        from_name: formData.username,
        from_email: formData.email,
        message: formData.message,
      },
      "Avo3CHOKHj-h1HaI9" // Replace with your EmailJS user ID
    )
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
};

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">

          <a href="mailto:diegoguardiola01@gmail.com" className="p-text">My Email</a>
        </div>
        <div className="app__footer-card">

          <a href="tel:+1 (925) 997-9490" className="p-text">My Phone</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input style={{backgroundColor: '#fff'}} className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input style={{backgroundColor: '#fff'}} className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              style={{backgroundColor: '#fff'}}
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  '',
);
