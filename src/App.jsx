// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import TravelAndAccomodation from './pages/TravelAndAccomodation';
import ProgrammeDetails from './pages/ProgrammeDetails';
import About from './pages/About';
import Speakers from './pages/Speakers';
import ScientificCommittee from './pages/ScientificCommittee'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/programme-details" element={<ProgrammeDetails />} />
          <Route path="/scientific-committee" element={<ScientificCommittee />} />
          <Route path="/travel-and-accomodation" element={<TravelAndAccomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
