// TravelAndAccomodation.jsx
import "./TravelAndAccomodation.css";

const TravelAndAccomodation = () => {
  return (
    <div className="travel-page">
      <header className="page-header fade-in">
        <h1>Travel & Accommodation</h1>
        <p>Information for IUTAM Symposium 2026 Participants</p>
      </header>

      <div className="travel-container">
        {/* UPPER SECTION: Transport & Map */}
        <section className="travel-content">
          <div className="travel-left card fade-in">
            <h2>How to Reach IIT Delhi</h2>

            <div className="transport-section">
              <h3>✈️ By Air (International & Domestic)</h3>
              <p>
                The nearest airport is{" "}
                <strong>Indira Gandhi International Airport (DEL)</strong>,
                located ~12km from the campus.
              </p>
              <ul>
                <li>
                  <strong>Taxi:</strong> Pre-paid or app-based cabs (Uber/Ola)
                  are recommended (~30-45 mins).
                </li>
                <li>
                  <strong>Metro:</strong> The <strong>Magenta Line</strong>{" "}
                  connects directly to the{" "}
                  <strong>IIT Delhi Metro Station</strong>.
                </li>
              </ul>
            </div>

            <div className="transport-section">
              <h3>🚆 By Train</h3>
              <p>
                Major hubs are <strong>New Delhi Railway Station (NDLS)</strong>{" "}
                and <strong>Hazrat Nizamuddin (NZM)</strong>.
              </p>
              <ul>
                <li>
                  <strong>Metro:</strong> Take the Yellow Line from NDLS and
                  interchange to the Magenta Line at Hauz Khas.
                </li>
                <li>
                  <strong>Taxi:</strong> Direct cabs are available from all
                  major stations.
                </li>
              </ul>
            </div>
          </div>

          <div className="travel-right fade-in">
            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Indian%20Institute%20of%20Technology%20Delhi,%20Hauz%20Khas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "4px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IIT Delhi Location Map"
              ></iframe>
              <div className="map-label">📍 IIT Delhi Main Campus</div>
            </div>
          </div>
        </section>

        {/* LOWER SECTION: Accommodation Summary */}
        <section className="accommodation-full fade-in">
          <div className="card">
            <h2>🏨 Accommodation</h2>
            <p className="accommodation-intro">
              Participants are responsible for their own travel and stay
              arrangements. We recommend booking in the following areas based on
              your preference for proximity or city access.
            </p>

            <div className="hotel-summary-grid">
              <div className="hotel-category">
                <h3>1. Within Walking Distance</h3>
                <p>
                  Staying in <strong>close proximity to IIT Delhi</strong>{" "}
                  offers maximum convenience and eliminates the need for daily
                  commuting.
                </p>
                <ul>
                  <li>
                    <strong>Qutub Hotel Area:</strong> Several premium options
                    located within 1.5 km of the main gate.
                  </li>
                </ul>
              </div>

              <div className="hotel-category">
                <h3>2. Near Hauz Khas & South Delhi (3-6 km)</h3>
                <p>
                  These areas offer a wide selection of reasonably priced
                  boutique hotels and guest houses.
                </p>
                <ul>
                  <li>
                    <strong>Hauz Khas Village:</strong> Known for its heritage
                    and cultural atmosphere.
                  </li>
                  <li>
                    <strong>Green Park / Safdarjung:</strong> Popular
                    residential areas with numerous 3-star and 4-star options.
                  </li>
                </ul>
              </div>

              <div className="hotel-category">
                <h3>3. Premium / Luxury Stays (5-8 km)</h3>
                <p>
                  Large international hotel chains are located a few minutes'
                  drive from the venue.
                </p>
                <ul>
                  <li>
                    <strong>Aerocity:</strong> High-end luxury stays with direct
                    access to the airport.
                  </li>
                  <li>
                    <strong>Saket District Centre:</strong> Combines premium
                    accommodation with major shopping hubs.
                  </li>
                </ul>
              </div>
            </div>

            {/* NEW: BOOKING.COM EMBED SECTION */}
            <div className="booking-embed-section">
              <div className="booking-header-flex">
                <h3>Live Hotel Availability</h3>
                <a 
                  href="https://www.booking.com/searchresults.en-gb.html?ss=IIT+Delhi&ssne=IIT+Delhi&ssne_untouched=IIT+Delhi&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AsPhkc0GwAIB0gIkMjFkOWM3MjktYTFlNi00ZTJlLWIzNzUtMzY1NDY1OGI3MGNm2AIB4AIB&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=900066911&dest_type=landmark&checkin=2026-10-24&checkout=2026-10-27&group_adults=1&no_rooms=1&group_children=0" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="fallback-link-btn"
                >
                  Open in New Tab ↗
                </a>
              </div>
              
              <div className="hotel-booking-frame">
                <iframe 
                  src="https://www.booking.com/searchresults.en-gb.html?ss=IIT+Delhi&ssne=IIT+Delhi&ssne_untouched=IIT+Delhi&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AsPhkc0GwAIB0gIkMjFkOWM3MjktYTFlNi00ZTJlLWIzNzUtMzY1NDY1OGI3MGNm2AIB4AIB&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=900066911&dest_type=landmark&checkin=2026-10-24&checkout=2026-10-27&group_adults=1&no_rooms=1&group_children=0"
                  title="Booking.com Search Results"
                  className="booking-iframe"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="accommodation-footer">
              <p>
                <strong>Note:</strong> We strongly recommend booking early to
                secure more favorable rates.
              </p>
              <p>
                For specific guest house inquiries, contact the team at{" "}
                <strong>iutam2026@iitd.ac.in</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TravelAndAccomodation;
