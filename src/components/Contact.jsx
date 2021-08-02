import React from "react";

function Contact() {
    return (
        <section className="container-fluid" id="contact">
      <div className="contact-div">

        <div className="contact-form-div">
          <h1 className="contact-title">Let's Talk About Wingit.</h1>
          <p className="contact-text">
            No nonsense, just the content you need.
          </p>
          <form action="/contact" method="post" className="contact-form">

            <input type="email" name="email" className="email pressed" placeholder="Your Email" required/>

            <button type="submit" className="submit pushed">Submit
            </button>

          </form>

        </div>

      </div>
    </section>
    );
}

export default Contact;