import React from 'react';
import './TravelAndAccomodation.css';

const TravelAndAccomodation = () => {
  return (
    <div className="travel-page">

      {/* PAGE TITLE */}
      <section className="page-header">
        <h1>Travel & Accomodation</h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="travel-content">

        {/* LEFT: TRANSPORT DETAILS */}
        <div className="travel-left">

          <h2>How to Reach IIT Delhi</h2>

          <h3>✈️ By Air</h3>
          <p>
            <strong>Indira Gandhi International Airport (DEL)</strong> is the main
            international and domestic airport serving New Delhi, located
            approximately <strong>12 km</strong> from IIT Delhi.
          </p>
          <ul>
            <li>Taxi / App-based cabs (Uber, Ola): ~30–45 minutes</li>
            <li>Airport Express Metro + Yellow Line Metro</li>
          </ul>

          <h3>🚇 By Metro</h3>
          <p>
            IIT Delhi is directly accessible via the
            <strong> Yellow Line</strong> of the Delhi Metro.
          </p>
          <ul>
            <li>Nearest station: <strong>IIT Delhi Metro Station</strong></li>
            <li>Campus gates are a short walk from the station</li>
          </ul>

          <h3>🚆 By Train</h3>
          <p>
            New Delhi is well connected to all major Indian cities by rail.
          </p>
          <ul>
            <li>New Delhi Railway Station (NDLS): ~16 km</li>
            <li>Hazrat Nizamuddin Railway Station: ~10 km</li>
            <li>Auto-rickshaws, taxis, and metro available from stations</li>
          </ul>

          <h3>🚕 Local Transport</h3>
          <ul>
            <li>App-based cabs (Uber, Ola)</li>
            <li>Auto-rickshaws and local taxis</li>
            <li>Delhi Metro is recommended for reliability</li>
          </ul>

          <h3>🏨 Accommodation</h3>
          <p className="muted">
            Accommodation details will be announced soon.
          </p>

        </div>

        {/* RIGHT: GOOGLE MAP */}
        <div className="travel-right">
          <iframe
            title="IIT Delhi Map"
            src="https://www.google.com/maps?q=Indian%20Institute%20of%20Technology%20Delhi&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </section>

    </div>
  );
};

export default TravelAndAccomodation;
