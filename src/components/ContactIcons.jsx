/**
 * ContactIcons.jsx
 *
 * Renders a row of social/contact icons for GitHub, LinkedIn, and email.
 */

import { IonIcon } from '@ionic/react';
import { logoGithub, logoLinkedin, mailOutline } from 'ionicons/icons';

const ContactIcons = () => {
  const sendEmail = () => {
    window.location.href = 'mailto:simkamr12@gmail.com';
  };

  return (
    <div className="contact-icons">
      <a href="https://github.com/ksims20" target="_blank" rel="noopener noreferrer" className="logo" aria-label="GitHub">
        <IonIcon icon={logoGithub} />
      </a>

      <a href="https://www.linkedin.com/in/kamren-sims-845844258/" target="_blank" rel="noopener noreferrer" className="logo" aria-label="LinkedIn">
        <IonIcon icon={logoLinkedin} />
      </a>

      <div onClick={sendEmail} className="logo" aria-label="Send Email" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && sendEmail()}>
        <IonIcon icon={mailOutline} />
      </div>
    </div>
  );
};

export default ContactIcons;
