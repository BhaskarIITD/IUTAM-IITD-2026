import React from "react";
import scientificCommittee from "../data/scientific-committee.json";
import delegatesData from "../data/delegates.json";
import "./ProgrammeDetails.css";

const ProgrammeDetails = () => {
  return (
    <div className="programme-page">

      {/* PAGE TITLE */}
      <header className="programme-header">
        <h1>Programme Details</h1>
      </header>

      {/* MAIN CONTENT */}
      <section className="programme-content">

        {/* LEFT COLUMN */}
        <div className="programme-left">

          {/* SCIENTIFIC COMMITTEE */}
          <section className="committee-section">
            <h2>Scientific Committee</h2>

            <ul className="committee-list">
              {scientificCommittee.map((member) => (
                <li key={member.id} className="committee-item">
                  <span className="committee-name">{member.name}</span>
                  {member.role && (
                    <span className="committee-role"> — {member.role}</span>
                  )}
                  <div className="committee-meta">
                    {member.institution}, {member.country}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* SPEAKERS */}
          <section className="speakers-section">
            <h2>Invited Speakers</h2>

            <ul className="speakers-list">
              {delegatesData.map((speaker) => (
                <li key={speaker.sNo} className="speaker-item">
                  <span className="speaker-name">{speaker.name}</span>
                  <div className="speaker-meta">
                    {speaker.affiliation}, {speaker.country}
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <div className="programme-right">

          <h2>Programme Overview</h2>

          <div className="timeline">

            <div className="timeline-item">
              <span className="day">Day 1</span>
              <p>Opening Ceremony · Keynote Lectures · Welcome Reception</p>
            </div>

            <div className="timeline-item">
              <span className="day">Day 2</span>
              <p>Technical Sessions · Invited Talks · Poster Session</p>
            </div>

            <div className="timeline-item">
              <span className="day">Day 3</span>
              <p>Advanced Topics · Panel Discussions · Conference Dinner</p>
            </div>

            <div className="timeline-item">
              <span className="day">Day 4</span>
              <p>Special Sessions · Closing Remarks</p>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default ProgrammeDetails;
