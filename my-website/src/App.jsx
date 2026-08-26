import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Shared chrome
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import EventLayout from './components/EventLayout.jsx';
import Landing from './components/Landing.jsx';
import IcicleTraining from './components/IcicleTraining.jsx';
import PastEvents from './components/PastEvents.jsx';
import { harvestIndia2026, harvestVision2027 } from './events.js';

// Open edition — HARVEST-India 2026 (3rd Edition), HiPC 2026
import IndiaOverview from './components/HarvestIndia2026/Overview.jsx';
import IndiaImportantDates from './components/HarvestIndia2026/ImportantDates.jsx';
import IndiaCallForPapers from './components/HarvestIndia2026/CallForPapers.jsx';
import IndiaCallForPosters from './components/HarvestIndia2026/CallForPosters.jsx';
import IndiaAgenda from './components/HarvestIndia2026/Agenda.jsx';
import IndiaOrganizers from './components/HarvestIndia2026/Organizers.jsx';
import IndiaProgramCommittee from './components/HarvestIndia2026/ProgramCommittee.jsx';
import IndiaTravelGrants from './components/HarvestIndia2026/TravelGrants.jsx';
import IndiaContact from './components/HarvestIndia2026/Contact.jsx';

// Open edition — HARVEST-Vision 2027 (4th Edition), WACV 2027
import VisionOverview from './components/HarvestVision2027/Overview.jsx';
import VisionImportantDates from './components/HarvestVision2027/ImportantDates.jsx';
import VisionCallForPapers from './components/HarvestVision2027/CallForPapers.jsx';
import VisionCallForPosters from './components/HarvestVision2027/CallForPosters.jsx';
import VisionAgenda from './components/HarvestVision2027/Agenda.jsx';
import VisionOrganizers from './components/HarvestVision2027/Organizers.jsx';
import VisionProgramCommittee from './components/HarvestVision2027/ProgramCommittee.jsx';
import VisionTravelGrants from './components/HarvestVision2027/TravelGrants.jsx';
import VisionContact from './components/HarvestVision2027/Contact.jsx';

// Archived editions
import HarvestVision2026Page from './components/HarvestVision2026/Page.jsx';
import Harvest2025Page from './components/Harvest2025/Page.jsx';

// Both open editions expose the same seven sections, so they share one route
// shape. The slugs here must match EVENT_SECTIONS in src/events.js, which is
// what draws the side tabs.
const editions = [
  {
    event: harvestIndia2026,
    overview: (
      <>
        <IndiaOverview />
        <IndiaImportantDates />
        <IndiaOrganizers />
        <IndiaProgramCommittee />
        <IcicleTraining />
      </>
    ),
    'call-for-papers': <IndiaCallForPapers />,
    'call-for-posters': <IndiaCallForPosters />,
    agenda: <IndiaAgenda />,
    committees: (
      <>
        <IndiaOrganizers />
        <IndiaProgramCommittee />
      </>
    ),
    'travel-grants': <IndiaTravelGrants />,
    contact: <IndiaContact />,
  },
  {
    event: harvestVision2027,
    overview: (
      <>
        <VisionOverview />
        <VisionImportantDates />
        <VisionOrganizers />
        <VisionProgramCommittee />
        <IcicleTraining />
      </>
    ),
    'call-for-papers': <VisionCallForPapers />,
    'call-for-posters': <VisionCallForPosters />,
    agenda: <VisionAgenda />,
    committees: (
      <>
        <VisionOrganizers />
        <VisionProgramCommittee />
      </>
    ),
    'travel-grants': <VisionTravelGrants />,
    contact: <VisionContact />,
  },
];

const SECTION_SLUGS = [
  'call-for-papers',
  'call-for-posters',
  'agenda',
  'committees',
  'travel-grants',
  'contact',
];

function App() {
  // BASE_URL is '/harvest/' in production and '/' in dev; basename wants no
  // trailing slash.
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <Router basename={basename}>
      <div className="App">
        <NavBar />

        <Routes>
          {/* 🏠 Series landing page — pick an edition */}
          <Route
            path="/"
            element={
              <>
                <section className="body">
                  <Landing />
                </section>
                <Footer />
              </>
            }
          />

          {/* 🌾 One tab per open edition, each with its own side tabs */}
          {editions.map((edition) => (
            <Route
              key={edition.event.id}
              path={edition.event.basePath}
              element={<EventLayout event={edition.event} />}
            >
              <Route index element={edition.overview} />
              {SECTION_SLUGS.map((slug) => (
                <Route key={slug} path={slug} element={edition[slug]} />
              ))}
            </Route>
          ))}

          {/* 📚 Past Events index */}
          <Route
            path="/past-events"
            element={
              <>
                <section className="body">
                  <Container>
                    <PastEvents />
                  </Container>
                </section>
                <Footer />
              </>
            }
          />

          {/* 📅 Archived editions — /past-events/2025 is a published link, keep it */}
          <Route path="/past-events/harvest-vision-2026" element={<HarvestVision2026Page />} />
          <Route path="/past-events/2025" element={<Harvest2025Page />} />

          {/* 🔗 Pre-restructure links. These were the top-level nav paths back when
              the site hosted a single edition, so keep them resolving to
              HARVEST-India 2026 instead of 404-ing anyone who bookmarked one. */}
          {SECTION_SLUGS.map((slug) => (
            <Route
              key={`legacy-${slug}`}
              path={`/${slug}`}
              element={<Navigate to={`${harvestIndia2026.basePath}/${slug}`} replace />}
            />
          ))}

          {/* 🔁 Unknown paths fall back to the landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
