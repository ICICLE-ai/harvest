import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Shared chrome
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import IcicleTraining from './components/IcicleTraining.jsx';
import PastEvents from './components/PastEvents.jsx';

// Current edition — HARVEST-India 2026 (3rd Edition), HiPC 2026
import Banner from './components/HarvestIndia2026/Banner.jsx';
import MiniBanner from './components/HarvestIndia2026/MiniBanner.jsx';
import Overview from './components/HarvestIndia2026/Overview.jsx';
import ImportantDates from './components/HarvestIndia2026/ImportantDates.jsx';
import CallForPapers from './components/HarvestIndia2026/CallForPapers.jsx';
import CallForPosters from './components/HarvestIndia2026/CallForPosters.jsx';
import Agenda from './components/HarvestIndia2026/Agenda.jsx';
import Organizers from './components/HarvestIndia2026/Organizers.jsx';
import ProgramCommittee from './components/HarvestIndia2026/ProgramCommittee.jsx';
import TravelGrants from './components/HarvestIndia2026/TravelGrants.jsx';
import Contact from './components/HarvestIndia2026/Contact.jsx';

// Archived editions
import HarvestVision2026Page from './components/HarvestVision2026/Page.jsx';
import Harvest2025Page from './components/Harvest2025/Page.jsx';

function App() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Call for Papers', path: '/call-for-papers' },
    { label: 'Call for Posters', path: '/call-for-posters' },
    { label: 'Agenda', path: '/agenda' },
    { label: 'Committees', path: '/committees' },
    { label: 'Travel Grants', path: '/travel-grants' },
    { label: 'Contact', path: '/contact' },
    { label: 'Past Events', path: '/past-events' },
  ];

  return (
    <Router>
      <div className="App">
        <NavBar links={links} />

        <Routes>
          {/* 🏠 Home — current edition */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <section className="body">
                  <Container className="box">
                    <Overview />
                    <ImportantDates />
                    <Organizers />
                    <ProgramCommittee />
                    <IcicleTraining />
                  </Container>
                </section>
                <Footer />
              </>
            }
          />

          {/* 📄 Call for Papers */}
          <Route
            path="/call-for-papers"
            element={
              <section className="body">
                <Container>
                  <CallForPapers />
                </Container>
              </section>
            }
          />

          {/* 🖼️ Call for Posters */}
          <Route
            path="/call-for-posters"
            element={
              <section className="body">
                <Container>
                  <CallForPosters />
                </Container>
              </section>
            }
          />

          {/* 🗓️ Agenda */}
          <Route
            path="/agenda"
            element={
              <section className="body">
                <Container>
                  <Agenda />
                </Container>
              </section>
            }
          />

          {/* 👥 Committees */}
          <Route
            path="/committees"
            element={
              <section className="body">
                <Container>
                  <MiniBanner />
                  <Organizers />
                  <ProgramCommittee />
                </Container>
              </section>
            }
          />

          {/* ✈️ Travel Grants */}
          <Route
            path="/travel-grants"
            element={
              <section className="body">
                <Container>
                  <MiniBanner />
                  <TravelGrants />
                </Container>
              </section>
            }
          />

          {/* ✉️ Contact */}
          <Route
            path="/contact"
            element={
              <section className="body">
                <Container>
                  <MiniBanner />
                  <Contact />
                </Container>
              </section>
            }
          />

          {/* 📚 Past Events index */}
          <Route
            path="/past-events"
            element={
              <section className="body">
                <Container>
                  <PastEvents />
                </Container>
              </section>
            }
          />

          {/* 📅 Archived editions — /past-events/2025 is a published link, keep it */}
          <Route path="/past-events/harvest-vision-2026" element={<HarvestVision2026Page />} />
          <Route path="/past-events/2025" element={<Harvest2025Page />} />

          {/* 🔁 Redirect all unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
