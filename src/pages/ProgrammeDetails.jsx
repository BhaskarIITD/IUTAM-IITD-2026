// ProgrammeDetails.jsx
import React, { useState } from "react";
import programme from "../data/schedule.json";
import "./ProgrammeDetails.css";

const ProgrammeDetails = () => {
  // State to track which day is currently selected (defaults to Day 1)
  const [activeTab, setActiveTab] = useState(1);

  // Grouping the data to make rendering much cleaner
  const days = [
    {
      id: 0,
      label: "Day 0",
      title: "Saturday, 24th October 2026",
      events: programme.slice(0, 1),
    },
    {
      id: 1,
      label: "Day 1",
      title: "Sunday, 25th October 2026",
      events: programme.slice(1, 16),
    },
    {
      id: 2,
      label: "Day 2",
      title: "Monday, 26th October 2026",
      events: programme.slice(16, 31),
    },
    {
      id: 3,
      label: "Day 3",
      title: "Tuesday, 27th October 2026",
      events: programme.slice(31, 46),
    },
  ];

  return (
    <div className="programme-page">
      {/* HEADER */}
      <header className="programme-header">
        <h1>Schedule for IUTAM Symposium 2026</h1>
        <p>October 24–27, 2026</p>
      </header>

      {/* CONTENT */}
      <section className="programme-content">
        {/* TAB NAVIGATION */}
        <div className="tabs-container">
          {days.map((day) => (
            <button
              key={day.id}
              className={`tab-button ${activeTab === day.id ? "active" : ""}`}
              onClick={() => setActiveTab(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT (SCHEDULE) */}
        {/* TAB CONTENT (SCHEDULE) */}
        <div className="tab-content">
          {days.map(
            (day) =>
              activeTab === day.id && (
                <div key={day.id} className="card fade-in">
                  <h2>{day.title}</h2>
                  <ul className="event-list">
                    {day.events.map((event) => {
                      // Detect if the event is a break/meal to style it differently
                      const isBreak =
                        event.title &&
                        (event.title.toLowerCase().includes("break") ||
                          event.title.toLowerCase().includes("lunch") ||
                          event.title.toLowerCase().includes("breakfast") ||
                          event.title.toLowerCase().includes("dinner"));

                      return (
                        <li
                          key={event.id}
                          className={`event-item ${isBreak ? "break-session" : ""}`}
                        >
                          <div className="event-row">
                            <div className="event-time">{event.time}</div>

                            <div className="event-content">
                              {event.speaker ? (
                                <>
                                  <div className="speaker-line">
                                    <span className="speaker-name">
                                      {event.speaker.name}
                                    </span>
                                  </div>
                                  {event.topic && (
                                    <div className="talk-topic">
                                      <em>{event.topic}</em>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <div className="event-title">
                                  {isBreak && "☕ "}{" "}
                                  {/* Adds a little icon for breaks */}
                                  {event.title}
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ),
          )}
        </div>
      </section>
    </div>
  );
};

export default ProgrammeDetails;
