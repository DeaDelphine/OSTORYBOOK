/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import { useRef, useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';
import '../styles.scss';

//  * Display a form to log in, with inputs email and password.
//  * It has two modes: "connected" and "not connected"
//  *   - "connected": displays a message and a button to disconnect
//  *   - "not connected": displays the form and a button to connect
//  */

function ContactForm() {
  const initialValues = { email: '', subject: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const form = useRef();
  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.email) {
      errors.email = "L'email ne doit pas être vide ";
    }
    else if (!regex.test(values.email)) {
      errors.email = "Le format d'email n'est pas valide ";
    }
    if (!values.subject) {
      errors.subject = 'Le sujet ne doit pas être vide ';
    }
    if (!values.message) {
      errors.message = 'Le message ne doit pas être vide ';
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const sendEmail = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // eslint-disable-next-line max-len
    if (Object.keys(validate(formValues)).length === 0) {
      emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
        .then((result) => {
          alert('Votre Message a bien été bien envoyé !');
          setFormValues({ email: '', subject: '', message: '' });
        });
    }
  };

  return (
    <div className="contact-form">

      <div className="contact-form-container">

        <h1 className="contact-form-title">Nous contacter</h1>
        <div className="contact-form-element">
          <form
            className="contact-form--form"
            onSubmit={sendEmail}
            ref={form}
          >
            <p>{ formErrors.email }</p>
            <div className="contact-field">

              <input
                // required="required"
                type="email"
                className="contact-field-email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handlechange}
              />
              <p>{ formErrors.subject }</p>
              <input
                type="text"
                className="contact-field-email"
                name="subject"
                placeholder="Objet"
                value={formValues.subject}
                onChange={handlechange}
              />
              <p>{ formErrors.message }</p>
              <textarea
                // required="required"
                id="message"
                className="contact-field-textarea"
                name="message"
                placeholder="Votre message"
                value={formValues.message}
                onChange={handlechange}
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
