import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner.jsx";
import Overview from "./Overview.jsx";
import ImportantDates from "./ImportantDates.jsx";
import CallForPapers from "./CallForPapers.jsx";
import Organizers from "./Organizers.jsx";
import ProgramCommittee from "./ProgramCommittee.jsx";
import Agenda from "./Agenda.jsx";
import ImageCarousel from "./ImageCarousel.jsx";
import TravelGrants from "./TravelGrants.jsx";
import Footer from "../Footer.jsx";

export default function HarvestVision2026Page() {
  return (
    <>
      <Banner />
      <section className="body">
        <Container>
          <Overview />
          <ImportantDates />
          <CallForPapers />
          <Organizers />
          <ProgramCommittee />
          <Agenda />
          <ImageCarousel />
          <TravelGrants />
        </Container>
      </section>
      <Footer />
    </>
  );
}
