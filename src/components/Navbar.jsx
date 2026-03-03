// Navbar.jsx
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import iutamLogo from '../assets/IUTAM-Logo-Site-.png';
import iitdLogo from '/iitd-logo-black.png'; // Added IITD Logo

const Navbar = () => {
  return (
    <header className="navbar">
      
      {/* LEFT — Logos */}
      <div className="nav-left">
        <Link to="/" className="logo-wrap">
          <img src={iitdLogo} alt="IIT Delhi Logo" className="iitd-logo" />
          <div className="logo-divider"></div> {/* Clean separator between logos */}
          <img src={iutamLogo} alt="IUTAM Logo" className="iutam-logo" />
        </Link>
      </div>

      {/* CENTER — Links (Upgraded to NavLink for active state styling) */}
      <nav className="nav-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/scientific-committee">Scientific Committee</NavLink>
        <NavLink to="/programme-details">Schedule</NavLink>
        <NavLink to="/speakers">Speakers</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/travel-and-accomodation">Travel & Accommodation</NavLink>
      </nav>

    </header>
  );
};

export default Navbar;