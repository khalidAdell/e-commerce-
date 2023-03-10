import React from "react";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="text">
        <h1>Contact Us</h1>
        <p>
          Need to get in touch with us ? Fill in these blanks and our expert
          support team will answer your all questions
        </p>
      </div>
      <div className="inputs">
        <form action="">
          <div className="flex">
            <div className="contact-input">
              <label for="">First Name</label>
              <input type="text" required name="firstname" />
            </div>

            <div className="contact-input">
              <label for="">Last Name</label>
              <input type="text" required name="lastname" />
            </div>
          </div>

          <div className="contact-input">
            <label for="">Email</label>
            <input type="email" required name="email" />
          </div>

          <div className="contact-input">
            <label for="">What can we help you with ?</label>
            <textarea required name="complaint"></textarea>
          </div>

          <div className="contact-input">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
