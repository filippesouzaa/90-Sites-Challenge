import React from "react";
import Logo from "../../images/spiderman.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import "./header.css";

function index() {
  return (
    <div className="header-style">
      <div className="left-side">
        <img className="spiderman-logo" src={Logo} />
        <ul className="options">
          <li>
            <a className="buttonsAndIcons">Home</a>
          </li>
          <li>
            <a className="buttonsAndIcons">Story</a>
          </li>
          <li>
            <a className="buttonsAndIcons">Wallpapers</a>
          </li>
          <li>
            <a className="buttonsAndIcons">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <ul className="options">
          <li>
            <a className="buttonsAndIcons">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a className="buttonsAndIcons">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a className="buttonsAndIcons">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a className="buttonsAndIcons">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default index;
