import React, { useState, useEffect } from 'react';
import { MortarboardFill, BriefcaseFill, CalendarEvent, PeopleFill } from 'react-bootstrap-icons';
import data from '../assets/json/schedule.json';
import '../assets/css/Experience.css';
import '../assets/css/FeaturedTalk.css';

const featuredTalks = [
  {
    title: 'Computer Vision and AI tools for automated pollinator monitoring',
    speaker: 'Dr Rémi Mégret, University of Puerto Rico, Río Piedras campus',
    abstract: `Pollinators and honey bees are critical for crop production worldwide, yet face accelerating threats from climate extremes and habitat loss. In this presentation, I will showcase recent developments in artificial intelligence for fine-grained and scalable pollinator monitoring. These systems generate quantitative indicators of pollinator activity and colony dynamics at both individual and colony scales, supporting biodiversity monitoring, climate resilience studies, integrative biological research, and data-informed agricultural management.

We will discuss several complementary AI-enabled systems. First, real-time computer vision monitoring of artificial flower patches dynamically captures honey bee visitation and behavior, providing immediate feedback for controlled behavioral assays relevant to crop pollination studies and breeding programs. Second, a high-performance computing pipeline analyzes weeks of continuous video from hive entrances, combining QR-code tagging and deep learning models for long-term individual identification and behavioral pattern analysis.

This work leverages lightweight marking strategies, domain-adapted computer vision models, and a combination of edge-based video acquisition and preprocessing with high-performance computing for large-scale analysis. Supporting these advances, the LabelBee web application ecosystem facilitates visualization, annotation, and management of large video datasets, lowering barriers to AI-driven pollinator research. Beyond research deployment, we will discuss current efforts in the deployment of these tools to support AI literacy through K12 convergent research experiences focused on pollinator monitoring.`,
    acknowledgements: 'This research is supported by NSF awards 2318597, 2321760, USDA/NIFA award 2021-67014-34999. This work uses the UPR High-Performance Computing facility, supported by NIH/NIGMS award 5P20GM103475.',
    bio: `Dr Mégret is an professor in Computer Science at University of Puerto Rico, Río Piedras campus (UPR-RP). His expertise is in computer vision and machine learning. During his tenures at Bordeaux Institute of Technology, France then at UPR, he has contributed to multiple national and international collaborative research projects with both academia and industrial partners. Applications include remote sensing using unmanned aerial vehicles and analysis of videos from wearable cameras. His recent projects focus on the application of Computer Vision and Deep Learning to Experimental Sciences, through collaborations with researchers from Biology, Physics and Material Sciences. He is currently the PI of NSF project CyIndiBee developing automated tools for video monitoring of honeybees and Co-PI of NSF project E-RISE Blueprint of life focusing on the integration of computational and AI tools for developmental biology. Dr Mégret is also passionate about training the next generation of computer scientists and hope to grow the capacity for innovation in artificial intelligence and machine learning in Puerto Rico.`
  }
];

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
  const [expandedTalks, setExpandedTalks] = useState({});

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

  // Toggle expansion for individual talks
  const toggleTalkExpansion = (talkIndex) => {
    setExpandedTalks(prev => ({
      ...prev,
      [talkIndex]: !prev[talkIndex]
    }));
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

      {/* Featured Talks Section */}
      <div className="featured-talks">
        <h3 className="featured-talks-heading">Featured Talks</h3>
        {featuredTalks.map((talk, index) => (
          <div 
            key={index}
            className={`featured-talk ${expandedTalks[index] ? 'expanded' : 'collapsed'}`}
            onClick={() => toggleTalkExpansion(index)}
          >
            <h4 className="featured-talk-title">{talk.title}</h4>
            <p className="featured-talk-speaker"><strong>Speaker:</strong> {talk.speaker}</p>
            <div className="featured-talk-content">
              <div className="featured-talk-abstract">
                <h5>Abstract</h5>
                <div className="featured-talk-text">{talk.abstract}</div>
              </div>
              {talk.acknowledgements && (
                <div className="featured-talk-acknowledgements">
                  <h5>Acknowledgements</h5>
                  <div className="featured-talk-text">{talk.acknowledgements}</div>
                </div>
              )}
              {talk.bio && (
                <div className="featured-talk-bio">
                  <h5>Speaker Bio</h5>
                  <div className="featured-talk-text">{talk.bio}</div>
                </div>
              )}
            </div>
          </div>
        ))}
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
