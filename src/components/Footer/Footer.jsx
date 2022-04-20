import React from "react";
import { Linkedin, GitHub, Twitter, Instagram } from "react-feather";

const Footer = () => {
  return (
    <footer>
      <p className="attribution">
        Designed, Developed, and Deployed by Abdo Achhoubi
      </p>
      <div className="social-media">
        <a
          href="https://linkedin.com/in/abdoachhoubi"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin color="#FFFFFF" size={24} />
        </a>
        <a
          href="https://github.com/abdoachhoubi"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub color="#FFFFFF" size={24} />
        </a>
        <a
          href="https://twitter.com/Abdo_Ach225"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter color="#FFFFFF" size={24} />
        </a>
        <a
          href="https://instagram.com/abdo.achhoubi"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram color="#FFFFFF" size={24} />
        </a>
      </div>
      <p className="copyright">&copy; Space Alpha - All rights reserved</p>
    </footer>
  );
};

export default Footer;
