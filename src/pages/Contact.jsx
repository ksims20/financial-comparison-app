/**
 * Contact.jsx
 *
 * A two-column “Let’s Connect” page:
 * Left column: personal intro and call-to-action text.
 * Right column: headshot image and ContactIcons component.
 */

import HeadShot from '../assets/HeadShot.JPG';
import ContactIcons from '../components/ContactIcons'; 
import '../Contact.css';

const Contact = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2 className="Text">Let’s Connect!</h2>
        <p className="Text">
          Hello! I'm <span className="tealText">Kamren Sims</span>,a recent Computer Science graduate with a passion for front-end development and clean, accessible design.  My interest in
             <span className="tealText"> Web Development </span> began during my junior year of College (2022/2023), where I took <span className="tealText">New Media 231 - Introductory Interactive Media</span>, 
            <span className="tealText"> CSCI 344 - Advanced Web Technology </span>, and<span className="tealText"> CSCI 338 - Software enginneering. </span> Through these courses, I discovered the world
            of <span className="tealText"> Front-end Development / UX UI Design. </span> Since then, my passion for designing 
            and building web Applications has continued to grow. I've led personal projects from design to deployment
            and am always looking for new ways to improve my skills and contribute to impactful software. 
            <span className="tealText"> Currently, I'm seeking a  <b>Software Engineer I </b> or <b>Front-End Developer </b> role </span> where I can grow, collaborate, and build meaningful projects.
        </p>
      </div>

      <div className="about-right">
        <img src={HeadShot} alt="Contact" className="about-photo" />
        <ContactIcons />
      </div>
    </div>
  );
};

export default Contact;
