// Speakers.jsx
import React from "react";
import "./Speakers.css";

const Speakers = () => {
  return (
    <div className="speakers-page">
      {/* HEADER */}
      <header className="speakers-header">
        <h1>Invited Speakers</h1>
        <p>IUTAM Symposium 2026</p>
      </header>

      {/* CONTENT */}
      <section className="speakers-content">
        
        {/* TO BE ANNOUNCED STATE */}
        <div className="tba-card fade-in">
          <div className="tba-icon">🎤</div>
          <h2>To Be Announced</h2>
          <p>
            We are currently finalizing our lineup of distinguished speakers and experts. 
            Please check back soon for updates!
          </p>
        </div>

        {/* FUTURE SPEAKER GRID GOES HERE */}
        {/* <div className="speaker-grid">
           // Map over your future speakers.json data here
        </div> 
        */}

      </section>
    </div>
  );
};

export default Speakers;