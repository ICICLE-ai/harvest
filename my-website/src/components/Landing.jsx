import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../events.js';
import '../assets/css/Landing.css';

const Tbd = () => <span className="tbd">TBD</span>;

// Each card is a single <Link>, so the host conference is plain text here
// rather than an external anchor — nested anchors are invalid HTML.
export default function Landing() {
  return (
    <section className="landing">
      <header className="landing-header">
        <h1>HARVEST</h1>
        <p className="landing-tagline">
          International workshops on the applications of high-performance computing and AI in
          agriculture, hosted by the NSF ICICLE AI Institute.
        </p>
        <p className="landing-prompt">Choose an edition:</p>
      </header>

      <div className="landing-choices">
        {events.map((event) => (
          <Link key={event.id} to={event.basePath} className="landing-card">
            <span className="landing-card-edition">{event.edition}</span>
            <span className="landing-card-title">{event.title}</span>
            <span className="landing-card-tagline">{event.tagline}</span>

            <span className="landing-card-meta">
              <span>
                Date: {event.date ?? <Tbd />}
              </span>
              <span>
                Venue: {event.venue ?? <Tbd />}
              </span>
            </span>

            <span className="landing-card-host">In cooperation with {event.host.short}</span>
            <span className="landing-card-cta">Enter &rarr;</span>
          </Link>
        ))}
      </div>

      <p className="landing-past">
        <Link to="/past-events">Browse past editions of the workshop &rarr;</Link>
      </p>
    </section>
  );
}
