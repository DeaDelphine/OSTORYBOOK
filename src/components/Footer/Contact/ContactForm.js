/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles.scss';

//  * Display a form to log in, with inputs email and password.
//  * It has two modes: "connected" and "not connected"
//  *   - "connected": displays a message and a button to disconnect
//  *   - "not connected": displays the form and a button to connect
//  */

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // eslint-disable-next-line max-len
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
        alert('Votre Message a bien été bien envoyé !');
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form">

      <div className="contact-form-container">

        <h1 className="contact-form-title">NOUS CONTACTER</h1>
        <div className="contact-form-element">
          <form
            className="contact-form--form"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="contact-field">
              <input
                type="email"
                className="contact-field-email"
                name="email"
                placeholder="Email"
              />
              <input
                type="text"
                className="contact-field-email"
                name="subject"
                placeholder="Objet"
              />
              <textarea
                className="contact-field-textarea"
                name="message"
                placeholder="Votre message"
              />
              <button
                type="submit"
                className="contact-form-button"
              >ENVOYER
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
