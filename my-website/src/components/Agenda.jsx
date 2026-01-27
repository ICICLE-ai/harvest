import React, { useState, useEffect } from 'react';
import { MortarboardFill, BriefcaseFill, CalendarEvent, PeopleFill } from 'react-bootstrap-icons';
import data from '../assets/json/schedule.json';
import '../assets/css/Experience.css';

const papers = [
  {
    title: 'On the Evaluation of Multimodal Large Language Models for Agricultural Image Classification across Diverse Tasks',
    contactAuthor: 'Anindya Bijoy Das',
    contactEmail: 'adas@uakron.edu',
    authors: 'Anindya Bijoy Das · Shibbir Ahmed · Shahnewaz Karim Sakib',
  },
  {
    title: 'Supporting Ultra-High-Resolution Digital Agriculture Tasks with Fully Synthetic Curriculum Learning',
    contactAuthor: 'Jacob Hatef',
    contactEmail: 'hatef.4@osu.edu',
    authors: 'Jacob Hatef · Quentin Gregory Anthony · Nawras Alnaasan · Dhabaleswar Panda',
  },
  {
    title: 'Cott-ADNet: Lightweight Real-Time Cotton Boll and Flower Detection Under Field Conditions',
    contactAuthor: 'Rui-Feng Wang',
    contactEmail: 'sweefongreggiewong@gmail.com',
    authors: 'Rui-Feng Wang · Mingrui Xu · Matthew C Bauer · Iago Beffart Schardong · Xiaowen Ma · Peng Chee · Kangning Cui',
  },
  {
    title: 'FUME: Fused Unified Multi-Gas Emission Network for Livestock Rumen Acidosis Detection',
    contactAuthor: 'Taminul Islam',
    contactEmail: 'taminul.islam@siu.edu',
    authors: 'Taminul Islam · Toqi Tahamid Sarker · Mohamed Embaby · Khaled R. Ahmed · Amer Abughazaleh',
  },
  {
    title: 'A Multi-View Photometric Stereo Pipeline for Specular 3D Fruit Reconstruction',
    contactAuthor: 'Ariel Zuñiga-Santana',
    contactEmail: 'ariel.zuniga@postgrado.uoh.cl',
    authors: 'Ariel Zuñiga-Santana · Gabriele Facciolo · Shohei Nobuhara · Rodrigo Verschae',
  },
  {
    title: 'Advancing Precision Livestock Farming: Robust Country Chicken Detection via FeatherNet Fusion-YOLO and HenSense',
    contactAuthor: 'Maneesh Reddy Bhavanam',
    contactEmail: 'maneeshreddy_bhavanam@srmap.edu.in',
    authors: 'Maneesh Reddy Bhavanam · Pavan Suraj Kanna · Tamma Tarun Sai Reddy · Chaitanya Alapati',
  },
];

const tabs = [
  { id: 'schedule', label: 'Schedule', icon: <BriefcaseFill className="experience-icon" /> },
];

const Agenda = () => {
  const [open, setOpen] = useState('schedule');
  const [tempOpen, setTempOpen] = useState('schedule');
  const [changing, setChanging] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Handle fade-out and fade-in effect when changing tabs
  useEffect(() => {
    if (!changing) return;

    const step = 0.1;
    const interval = setInterval(() => {
      setOpacity(prev => {
        const newOpacity = isDeleting ? prev - step : prev + step;

        if (isDeleting && newOpacity <= 0) {
          clearInterval(interval);
          setOpen(tempOpen);
          setIsDeleting(false);
          return 0;
        }

        if (!isDeleting && newOpacity >= 1) {
          clearInterval(interval);
          setChanging(false);
          return 1;
        }

        return newOpacity;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [changing, isDeleting, tempOpen]);

  // Trigger fade transition to new tab
  const changeOpen = (id) => {
    if (open === id || changing) return; // prevent spamming clicks
    setTempOpen(id);
    setChanging(true);
    setIsDeleting(true);
  };

  // Render experience content for the currently active tab
  const experienceContent = Object.entries(data).map(([sectionKey, items]) => {
    if (sectionKey !== open) return null; // only render active tab content

    return (
      <div
        key={sectionKey}
        className="experience-content experience-active"
        style={{ opacity }}
        id="program"
      >
        {items.map((item, index) => (
          <div className="experience-data" key={`${item[0]}-${index}`}>
            {index % 2 === 1 && (
              <>
                <div />
                <div>
                  <span className="experience-rounder" />
                  {index !== items.length - 1 && <span className="experience-line" />}
                </div>
              </>
            )}
            <div className={index % 2 === 0 ? 'right' : 'left'}>
              <h3 className="experience-title">{item[0]}</h3>
              <div className="experience-calendar">
                <CalendarEvent />
                <span>{item[1]}</span>
              </div>
            </div>
            {index % 2 === 0 && (
              <div>
                <span className="experience-rounder" />
                {index !== items.length - 1 && <span className="experience-line" />}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  });

  return (
    <section className="experience" id="experience">
      <h2>Agenda</h2>
      <div className="experience-container">
        {/* Experience Sections */}
        <div className="experience-sections">{experienceContent}</div>
      </div>
      <div className="papers">
  <h3 className="papers-heading">Papers</h3>
  <ul className="papers-list">
    {papers.map((paper) => (
      <li key={paper.title} className="papers-item">
  <span className="papers-title">{paper.title}</span>
  <span className="papers-authors">{paper.authors}</span>
  <span className="papers-contact">
    Contact: <a href={`mailto:${paper.contactEmail}`}>{paper.contactAuthor}</a>
  </span>
</li>
    ))}
  </ul>
</div>
    </section>

    
  );
};

export default Agenda;
