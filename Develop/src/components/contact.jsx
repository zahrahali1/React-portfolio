import React, { useState } from "react";
import "./style.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with email:", email, "name:", name, "message:", message);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
