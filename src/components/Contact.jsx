// Contacts.jsx
import React from 'react';
import './Contact.css';

const Contacts = () => {
  return (
    <footer className="contacts-footer">
      <div className="contacts-container">
        
        {/* CONTACT INFO */}
        <div className="contact-column">
          <h4>Inquiries</h4>
          <p>For general questions regarding the symposium, registration, or logistics:</p>
          <a href="mailto:iutam2026@iitd.ac.in" className="contact-link">
            ✉️ iutam2026@iitd.ac.in
          </a>
        </div>

        {/* VENUE INFO */}
        <div className="contact-column">
          <h4>Venue</h4>
          <p>
            <strong>Indian Institute of Technology Delhi</strong><br />
            Hauz Khas, New Delhi<br />
            Delhi 110016, India
          </p>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="contact-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/registration">Register Now</a></li>
            <li><a href="/travel-and-accomodation">Travel Guide</a></li>
            <li><a href="/scientific-committee">Committee</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 IUTAM Symposium | Hosted by IIT Delhi</p>
      </div>
    </footer>
  );
};

export default Contacts;