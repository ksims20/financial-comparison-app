/**
 * Resume.jsx
 *
 *  lets users download the PDF version of my resume.
 */

import '../App.css';
import ContactIcons from '../components/ContactIcons';


const Resume = () => {
  return (
    <div>
      <div className="resume-container">
        <iframe
          title="Resume"
          className="resume-pdf"
          src="/Kamren_Sims_CS_Resume.pdf"
          style={{
            margin: '0 auto',
            width: '100%',
            maxHeight: '1000px',
            minHeight: '300px',
            height: '75vh',
            display: 'block',
            border: '2.5px solid #b22a2e',
            borderRadius: '5px',
          }}
        />
        <a
  href="/Kamren_Sims_CS_Resume.pdf"
  download="Kamren_Sims_Resume"
  className="download-link"
  style={{ color: '#b22a2e', fontSize: '18px', marginTop: '20px', display: 'block', textAlign: 'center' }}
>
  Download My Resume
</a>
        <ContactIcons />
      </div>
    </div>
  );
};

export default Resume;
