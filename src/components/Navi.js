import React, { Component } from "react";
import "../index.css";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default class Navi extends Component {
  render() {
    return (
      <div className="nav">
        <a href="#banner">
          <FaHome className="icon" />
        </a>
        <a href="#about" className="icon">
          <FaUser />
        </a>
        <a href="#portfolio">
          <FaBriefcase className="icon" />
        </a>
        <a href="#contact">
          <FaEnvelope className="icon" />
        </a>
      </div>
    );
  }
}
