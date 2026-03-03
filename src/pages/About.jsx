// About.jsx
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>Rate Dependent Mechanics and Multiscale Modelling of Materials</h1>
        <p>
          IUTAM Symposium 2026 · Indian Institute of Technology Delhi
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-content">

        {/* LEFT: TEXT */}
        <div className="about-text">

          <p>
            The proposed symposium, titled <strong>“Rate Dependent Mechanics and Multiscale
            Modelling of Materials”</strong>, aims to address an emerging and cross-disciplinary
            domain within solid mechanics that has high societal relevance but has not been
            traditionally covered in IUTAM symposia.
          </p>

          <p>
            Rate-dependent mechanical behaviour governs the performance of a broad class of
            advanced materials—including metallic foams, granular materials, glasses,
            ceramics, polymer and metal composites, and metamaterials—especially when
            subjected to extreme environments such as high strain rates, impact, blast,
            and elevated temperatures.
          </p>

          <p>
            Recent advances in experimental and computational mechanics have enabled
            multiscale exploration of deformation and failure mechanisms using tools such
            as high-speed imaging, digital image correlation, phase-field modelling,
            nonlocal continuum theories, and stochastic formulations.
          </p>

          <p>
            Data-driven approaches, including machine learning and physics-informed
            neural networks, are transforming predictive modelling by integrating
            experimental data with physical principles while quantifying uncertainty.
          </p>

          <p>
            By bringing together experts across theory, computation, and experiments,
            this symposium aims to foster collaboration, identify open challenges,
            and develop a roadmap for resilient and sustainable next-generation
            material systems.
          </p>

        </div>

        {/* RIGHT: HIGHLIGHTS */}
        <div className="about-highlights">

          <div className="highlight-card">
            <h4>Core Themes</h4>
            <ul>
              <li>Rate-dependent constitutive modelling</li>
              <li>Multiscale & multiphysics coupling</li>
              <li>Dynamic fracture and failure</li>
              <li>Architected & metamaterials</li>
            </ul>
          </div>

          <div className="highlight-card">
            <h4>Methodologies</h4>
            <ul>
              <li>High-speed experimentation & DIC</li>
              <li>Phase-field & gradient theories</li>
              <li>Data-driven & hybrid models</li>
              <li>Digital twins for dynamics</li>
            </ul>
          </div>

          <div className="highlight-card accent">
            <h4>Expected Outcome</h4>
            <p>
              A shared international roadmap for safer, efficient,
              and resource-conscious material systems.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default About;
