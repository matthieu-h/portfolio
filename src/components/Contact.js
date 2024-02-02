import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <form
        name="contact"
        className="contact-form"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name" title="User name" id="name-label">
          Nom
        </label>
        <input
          type="text"
          id="name"
          className="name"
          placeholder="Nom"
          name="name"
          required
        />
        <label htmlFor="email" title="User email" id="email-label">
          Email
        </label>
        <input
          type="email"
          className="email"
          placeholder="Votre Email"
          name="email"
          required
        />
        <label htmlFor="message" title="User's message" id="msg-label">
          Message
        </label>
        <textarea
          className="msg"
          name="message"
          placeholder="Votre message"
          rows="5"
          aria-labelledby="msg-label"
          required
        ></textarea>
        <button type="submit" className="contact-btn">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
