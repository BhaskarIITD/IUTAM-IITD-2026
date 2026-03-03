// Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from '../assets/background.jpg';
import splitImg1 from '../assets/splitImg1.jpeg';
import splitImg2 from '../assets/splitImg2.jpeg';

const Home = () => {
  return (
    <div className="home">
      {/* HERO SPLIT */}
      <section className="hero-split">
        <div
          className="hero-left"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div className="hero-right">
          
          {/* TOP GROUP: Title, Button, and Chairs moved up together */}
          <div className="hero-top-group">
            <div className="hero-label">IUTAM Symposium 2026</div>
            <div className="hero-divider" />

            <h1 className="hero-topic">
              Rate Dependent Mechanics and Multiscale Modelling of Materials
            </h1>

            <p className="hero-date">
              Indian Institute of Technology, New Delhi, India | October 24–27, 2026
            </p>

            <div className="hero-cta">
              <Link to="/registration" className="cta-register">
                Register Now
              </Link>
            </div>

            {/* CHAIRS SECTION (Moved directly below the CTA) */}
            <div className="chairs-section">
              <h4 className="sidebar-title">Chairs:</h4>
              
              <div className="chair-item">
                <strong>Saikat Sarkar</strong>
                <span className="chair-role">, Chair</span>
                <p className="chair-inst">(IIT Delhi, India)</p>
              </div>

              <div className="chair-item">
                <strong>Norman Fleck</strong>
                <span className="chair-role">, IUTAM Representative</span>
                <p className="chair-inst">(University of Cambridge, UK)</p>
              </div>
            </div>
          </div>

          {/* BOTTOM GROUP: Important Dates filling the empty space */}
          <div className="hero-bottom-group">
            <h4 className="sidebar-title">Important Dates:</h4>
            <div className="dates-box">
              <p className="tba-text">To be announced</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY THIS SYMPOSIUM */}
      <section className="why-section">
        <h2>Why This Symposium?</h2>
        <ul>
          <li>Extreme loading and rate-dependent material behaviour</li>
          <li>Multiscale modelling from microstructure to structures</li>
          <li>Architected and additively manufactured materials</li>
          <li>Data-driven and physics-informed mechanics</li>
        </ul>
      </section>

      {/* INTRO */}
      <section className="container split">
        <div className="split-text">
          <h3>IIT Delhi Symposium 2026</h3>
          <p>
            An international forum bringing together leading researchers to
            discuss advances in <span className="title">
            rate-dependent mechanics and multiscale modelling</span>.
          </p>
          <Link to="/about" className="read-more">Read more →</Link>
        </div>

        <div className="split-images">
          <img src={splitImg1} alt="campus1"/>
          <img src={splitImg2} alt="campus2"/>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <h2>Join Us at IIT Delhi</h2>
        <p>
          Engage with global experts and shape the future of
          rate-dependent and multiscale mechanics.
        </p>
      </section>
    </div>
  );
};

export default Home;