import React from 'react';
import './Contacts.css';
  
function Contacts() {
  return (
    <div className="contacts-section" id="contacts">
      <div className="contacts-container">

        <div className="contacts-info">
          <span className="contacts-tag">Contacts</span>
          <h2 className="contacts-title">VISIT US</h2>
          <p className="contacts-subtitle">Touch the atmosphere of aesthetics and care</p>

          <div className="info-group">
            <div className="info-item">
              <h3>Address</h3>
              <p>Novosibirsk, Lineynaya St. 28 (2nd floor)</p>
            </div>

            <div className="info-item">
              <h3>OPENING HOURS</h3>
              <p>Daily: from 10:00 to 21:00<br /><span>By appointment only</span></p>
            </div>

            <div className="info-item">
              <h3>Contact</h3>
              <a href="tel:+79991234567" className="phone-link">+7 (908)-663-87-05</a>

              <div className="social-links">
                <a
                  href="https://wa.me/79086638705"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>

                <a
                  href="https://t.me/@Lilina97215"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contacts-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.1495850422443!2d82.90166147707065!3d55.04777364607285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5b34dd80061%3A0xcbdcbdab29a8d5e5!2z0YPQuy4g0JvQuNC90LXQudC90LDRjywgMjgsINCd0L7QstC-0YHQuNCx0LjRgNGB0LosINCd0L7QstC-0YHQuNCx0LjRgNGB0LrQsNGPINC-0LHQuy4sIDYzMDA0OQ!5e1!3m2!1sru!2sru!4v1780559892348!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Magnolia Salon on the map of Novosibirsk"
          ></iframe>
        </div>

      </div>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} MAGNOLIA. All rights reserved.</p>
        <p className="footer-signature">Created with love</p>
      </footer>
    </div>
  );
}

export default Contacts;