import React, { Component } from 'react'
import {FaGithub, FaLinkedinIn, FaSpotify} from 'react-icons/fa';
export default class Infobox extends Component {
  render() {
    return (
        <div className='bb'> 
        <div className="inf-container">
            <div className="mebox">
            <img src="https://avatars.githubusercontent.com/u/76800000?v=4" alt="" />
            <h1>Ömer Kaya</h1>
            <h1>Front-End Developer</h1>
            <div className="social">
                <a href="https://www.linkedin.com/in/wuqqers/">
                   <FaLinkedinIn/> </a>
                <a href="https://www.linkedin.com/in/omer-kaya-0b1b1b1b1/">
                    <FaGithub/> </a>
                <a href="https://www.linkedin.com/in/omer-kaya-0b1b1b1b1/"
                > <FaSpotify/> </a>
            </div>
            <a href="#" className="button">Download CV</a>
        </div></div>       
    </div> 
    )
  }
}
