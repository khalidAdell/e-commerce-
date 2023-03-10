import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Special products</h3>
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <div className="hotel-social">
        <h3>Accounts</h3>
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-f"></i> Facebook
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram"></i> Instgram
            </a>
          </li>
        </ul>
      </div>
      <div className="hotel-social">
        <h3>Informations</h3>
        <ul>
          <li>
            <a href="">Investors</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
