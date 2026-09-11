import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from './Footer.jsx';
import { sectionsFor } from '../events.js';
import '../assets/css/EventLayout.css';

const Tbd = () => <span className="tbd">TBD</span>;

const eventShape = PropTypes.shape({
  basePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortLabel: PropTypes.string.isRequired,
  edition: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  date: PropTypes.string,
  venue: PropTypes.string,
  hiddenSections: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
});

// The masthead sits inside the content column (to the right of the side tabs)
// and is shown on every section of the edition, so the reader always knows
// which workshop the page in front of them belongs to.
function EventHeader({ event }) {
  return (
    <header className="event-header">
      <h1>
        {event.title} <span className="event-edition">({event.edition})</span>
      </h1>
      <p className="event-tagline">{event.tagline}</p>
      <p className="event-meta">
        {event.format}
        <span className="event-meta-sep">|</span>
        Date: {event.date ?? <Tbd />}
        <span className="event-meta-sep">|</span>
        Venue: {event.venue ?? <Tbd />}
      </p>
      <p className="event-host">
        In cooperation with{' '}
        <a href={event.host.url} target="_blank" rel="noopener noreferrer">
          {event.host.label}
        </a>
      </p>
    </header>
  );
}

EventHeader.propTypes = { event: eventShape.isRequired };

function SideTabs({ event }) {
  return (
    <nav className="event-sidebar" aria-label={`${event.title} sections`}>
      <p className="event-sidebar-title">{event.shortLabel}</p>
      <ul>
        {sectionsFor(event).map((section) => (
          <li key={section.slug || 'overview'}>
            <NavLink
              // The Overview tab is the edition's index route, so it must only
              // match exactly — otherwise it stays highlighted on every child.
              end={section.slug === ''}
              to={section.slug ? `${event.basePath}/${section.slug}` : event.basePath}
              className={({ isActive }) =>
                isActive ? 'event-sidebar-link active' : 'event-sidebar-link'
              }
            >
              {section.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

SideTabs.propTypes = { event: eventShape.isRequired };

export default function EventLayout({ event }) {
  return (
    <>
      {/* No Bootstrap Container here on purpose: it would centre the shell and
          push the side tabs inward on wide displays. The shell is full-bleed and
          supplies its own gutter so the tabs stay against the left edge. */}
      <section className="body">
        <div className="event-shell">
          <SideTabs event={event} />
          <div className="event-main">
            <EventHeader event={event} />
            <Outlet />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

EventLayout.propTypes = { event: eventShape.isRequired };
