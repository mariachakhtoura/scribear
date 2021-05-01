import React, { useState, useEffect, useRef, Fragment } from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="inner_footer">
          <div className="innert_footer_container">
            <div className="inner_footer_img_container">
              <a href="#home">
                <img
                  className="footer-logo"
                  src="./footer-logo.png"
                  alt="scribear logo"
                />
              </a>
              <h1>Making Transcription More Bearable</h1>
            </div>
            <div className="innert-footer_support">
              {/* <span>{new Date().getFullYear()}</span>
              <span> Beirut, Lebanon</span> */}
              {/* <div> */}
              {/* <a
                  href="mailto:scribear@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  scribear@outlook.com
                </a> */}
              <span>Contact the maintainer</span>
              <div className="inner_footer_contact_wrapper">
                <a
                  href="https://www.linkedin.com/in/maria-chakhtoura-586269163"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="inner_footer_social_links"
                    src="./linked-in.png"
                    alt="linkedIn"
                  />
                </a>
                <a
                  href="mailto:mariajchakhtoura@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="inner_footer_social_links gmail"
                    src="./gmail.png"
                    alt="Gmail"
                  />
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
