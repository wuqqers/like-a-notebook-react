import React, { Component } from "react";
export default class Content extends Component {
  render() {
  
  
    return (
      <div className="bb">
        <div className="content-container">
          <div className="scroll-div">
            <div className="welcome" id="banner">
              <h1>Hi I'm Ömer Kaya Ekici</h1>
              <h2>Welcome My Website</h2>
            </div>
            <section className="about" id="about">
              <img
                src="https://avatars.githubusercontent.com/u/76800000?v=4"
                alt=""
                className="smallimg"
              />
              <div className="text-container">
                <h1>About Me</h1>
                <p>
                  Hello, my name is Ömer Kaya Ekici and I am a front-end developer
                  with over 4 years of experience in creating beautiful and
                  user-friendly web applications. I have a passion for creating
                  intuitive and engaging user interfaces, as well as a deep
                  understanding of front-end technologies such as HTML, CSS,
                  JavaScript, and various front-end frameworks like React, Vue,
                  and Angular. I pride myself on my ability to take complex
                  design concepts and turn them into fully functional websites
                  that are both visually appealing and easy to use. I am a
                  detail-oriented individual who believes that the small details
                  can make a big impact on the overall user experience. In
                  addition to my technical skills, I also have excellent
                  communication and collaboration skills. I enjoy working
                  closely with designers and other developers to ensure that the
                  final product meets both the client's and the end-user's
                  needs. When I'm not coding, I enjoy staying up-to-date with
                  the latest front-end development trends and technologies, as
                  well as exploring new hobbies such as photography and hiking.
                  Thank you for taking the time to read a bit about me, and I
                  look forward to potentially working together in the future.
                </p>

              </div>
            </section>
            <section class="skills">
  <h2>My Skills</h2>
  <div class="skill">
    <h3>HTML</h3>
    <div class="skill-bar" data-skill="html">
      <div class="skill-level">90%</div>
    </div>
  </div>
  <div class="skill">
    <h3>CSS</h3>
    <div class="skill-bar" data-skill="css">
      <div class="skill-level">85%</div>
    </div>
  </div>
  <div class="skill">
    <h3>JavaScript</h3>
    <div class="skill-bar" data-skill="javascript">
      <div class="skill-level">75%</div>
    </div>
  </div>
</section>
<section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src="https://avatars.githubusercontent.com/u/76800000?v=4" alt="Project Image" />
          <h3>Project 1</h3>
          <p>Description</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="portfolio-item">
          <img src="https://avatars.githubusercontent.com/u/76800000?v=4" alt="Project Image" />
          <h3>Project 2</h3>
          <p>Description</p>
          <a href="https://avatars.githubusercontent.com/u/76800000?v=4" className="btn">Read More</a>
        </div>
        <div className="portfolio-item">
          <img src="https://avatars.githubusercontent.com/u/76800000?v=4" alt="Project Image" />
          <h3>Project 3</h3>
          <p>Description</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
<section className="contact" id="contact">
  <h1 className="contact-text">Contact Me</h1>
<form>
      <label htmlFor="name">Name:</label>
      <input className="input"
        type="text"
        id="name"
        name="name"
        required
      />

      <label htmlFor="surname">Surname:</label>
      <input className="input"
        type="text"
        id="surname"
        name="surname"
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea className="input"
        id="message"
        name="message"
        required
      />

      <button type="submit">Send</button>
    </form>
</section>
          </div>
        </div>
      </div>
    );
  }
}
