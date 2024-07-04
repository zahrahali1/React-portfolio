import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onBlur={handleBlur} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={handleBlur} 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onBlur={handleBlur} 
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;