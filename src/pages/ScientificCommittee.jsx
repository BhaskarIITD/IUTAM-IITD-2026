// ScientificCommittee.jsx
import React from "react";
import committee from "../data/scientific-committee.json";
import "./ScientificCommittee.css";

const ScientificCommittee = () => {
  return (
    <div className="committee-page">
      <div className="committee-container fade-in">
        
        <h2 className="section-title">Scientific Committee</h2>
        
        <div className="committee-list">
          {committee.map((member) => (
            <div key={member.id} className="committee-member">
              
              {/* NAME AND ROLE */}
              <p className="member-name-role">
                <strong>{member.name}</strong>
                {member.role && <span className="member-role">, {member.role}</span>}
              </p>
              
              {/* INSTITUTION AND COUNTRY */}
              <p className="member-affiliation">
                ({member.institution}, {member.country})
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScientificCommittee;