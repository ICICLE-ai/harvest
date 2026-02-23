// import React, { useState, useEffect } from 'react';
// import { BriefcaseFill, CalendarEvent } from 'react-bootstrap-icons';
// import data from '../assets/json/schedule.json';
// import '../assets/css/Experience.css';
// import '../assets/css/FeaturedTalk.css';

// import calebHeadshot from '../assets/img/Agenda/Headshot.jpg';

// const featuredTalks = [
//   {
//     title: 'Computer Vision and AI tools for automated pollinator monitoring',
//     speaker: 'Dr Rémi Mégret, University of Puerto Rico, Río Piedras campus',
//     // headshot: remiHeadshot,
//     abstract: `Pollinators and honey bees are critical for crop production worldwide, yet face accelerating threats from climate extremes and habitat loss. In this presentation, I will showcase recent developments in artificial intelligence for fine-grained and scalable pollinator monitoring. These systems generate quantitative indicators of pollinator activity and colony dynamics at both individual and colony scales, supporting biodiversity monitoring, climate resilience studies, integrative biological research, and data-informed agricultural management.

// We will discuss several complementary AI-enabled systems. First, real-time computer vision monitoring of artificial flower patches dynamically captures honey bee visitation and behavior, providing immediate feedback for controlled behavioral assays relevant to crop pollination studies and breeding programs. Second, a high-performance computing pipeline analyzes weeks of continuous video from hive entrances, combining QR-code tagging and deep learning models for long-term individual identification and behavioral pattern analysis.

// This work leverages lightweight marking strategies, domain-adapted computer vision models, and a combination of edge-based video acquisition and preprocessing with high-performance computing for large-scale analysis. Supporting these advances, the LabelBee web application ecosystem facilitates visualization, annotation, and management of large video datasets, lowering barriers to AI-driven pollinator research. Beyond research deployment, we will discuss current efforts in the deployment of these tools to support AI literacy through K12 convergent research experiences focused on pollinator monitoring.`,
//     acknowledgements:
//       'This research is supported by NSF awards 2318597, 2321760, USDA/NIFA award 2021-67014-34999. This work uses the UPR High-Performance Computing facility, supported by NIH/NIGMS award 5P20GM103475.',
//     bio: `Dr Mégret is an professor in Computer Science at University of Puerto Rico, Río Piedras campus (UPR-RP). His expertise is in computer vision and machine learning. During his tenures at Bordeaux Institute of Technology, France then at UPR, he has contributed to multiple national and international collaborative research projects with both academia and industrial partners. Applications include remote sensing using unmanned aerial vehicles and analysis of videos from wearable cameras. His recent projects focus on the application of Computer Vision and Deep Learning to Experimental Sciences, through collaborations with researchers from Biology, Physics and Material Sciences. He is currently the PI of NSF project CyIndiBee developing automated tools for video monitoring of honeybees and Co-PI of NSF project E-RISE Blueprint of life focusing on the integration of computational and AI tools for developmental biology. Dr Mégret is also passionate about training the next generation of computer scientists and hope to grow the capacity for innovation in artificial intelligence and machine learning in Puerto Rico.`
//   },


//   {
//     title: 'Vision Based Spraying',
//     speaker: 'Caleb Stuber, PTx Precision Planting',
//     headshot: calebHeadshot, 
//     abstract: `Weed control remains one of agriculture's persistent challenges. Effective weed control can have both a financial and environmental cost to blanket apply herbicides, but the cost of ineffective control exceeds the cost of treatment. This talk explores how vision-based spraying systems are changing that equation. By using real-time imaging and decision systems to selectively target weeds instead of blanket-applying herbicides, growers can reduce chemical use while protecting yield. Drawing on real-world deployment examples, this session will also examine the challenges of building a reliable system that performs under variability of production agriculture.`,
//     bio: `Caleb Stuber has spent over 12 years with PTx Precision Planting working across support, sales, and marketing roles. He currently works in strategic marketing where he is involved with helping to bring new innovative agriculture products to market. Caleb has worked closely with product development teams and growers to implement precision agriculture systems spanning the planting pass through harvest, including hands-on experience on his family's farm. His experience bridges technical knowledge and field application, offering practice insights into the real-world deployment of agriculture technology.`,
//   }
// ];

// const papers = [
//   {
//     title: 'On the Evaluation of Multimodal Large Language Models for Agricultural Image Classification across Diverse Tasks',
//     contactAuthor: 'Anindya Bijoy Das',
//     contactEmail: 'adas@uakron.edu',
//     authors: 'Anindya Bijoy Das · Shibbir Ahmed · Shahnewaz Karim Sakib',
//   },
//   {
//     title: 'Supporting Ultra-High-Resolution Digital Agriculture Tasks with Fully Synthetic Curriculum Learning',
//     contactAuthor: 'Jacob Hatef',
//     contactEmail: 'hatef.4@osu.edu',
//     authors: 'Jacob Hatef · Quentin Gregory Anthony · Nawras Alnaasan · Dhabaleswar Panda',
//   },
//   {
//     title: 'Cott-ADNet: Lightweight Real-Time Cotton Boll and Flower Detection Under Field Conditions',
//     contactAuthor: 'Rui-Feng Wang',
//     contactEmail: 'sweefongreggiewong@gmail.com',
//     authors: 'Rui-Feng Wang · Mingrui Xu · Matthew C Bauer · Iago Beffart Schardong · Xiaowen Ma · Peng Chee · Kangning Cui',
//   },
//   {
//     title: 'FUME: Fused Unified Multi-Gas Emission Network for Livestock Rumen Acidosis Detection',
//     contactAuthor: 'Taminul Islam',
//     contactEmail: 'taminul.islam@siu.edu',
//     authors: 'Taminul Islam · Toqi Tahamid Sarker · Mohamed Embaby · Khaled R. Ahmed · Amer Abughazaleh',
//   },
//   {
//     title: 'A Multi-View Photometric Stereo Pipeline for Specular 3D Fruit Reconstruction',
//     contactAuthor: 'Ariel Zuñiga-Santana',
//     contactEmail: 'ariel.zuniga@postgrado.uoh.cl',
//     authors: 'Ariel Zuñiga-Santana · Gabriele Facciolo · Shohei Nobuhara · Rodrigo Verschae',
//   },
//   {
//     title: 'Advancing Precision Livestock Farming: Robust Country Chicken Detection via FeatherNet Fusion-YOLO and HenSense',
//     contactAuthor: 'Maneesh Reddy Bhavanam',
//     contactEmail: 'maneeshreddy_bhavanam@srmap.edu.in',
//     authors: 'Maneesh Reddy Bhavanam · Pavan Suraj Kanna · Tamma Tarun Sai Reddy · Chaitanya Alapati',
//   },
// ];

// const tabs = [{ id: 'schedule', label: 'Schedule', icon: <BriefcaseFill className="experience-icon" /> }];

// const Agenda = () => {
//   const [open, setOpen] = useState('schedule');
//   const [tempOpen, setTempOpen] = useState('schedule');
//   const [changing, setChanging] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [opacity, setOpacity] = useState(1);
//   const [expandedTalks, setExpandedTalks] = useState({});

//   useEffect(() => {
//     if (!changing) return;

//     const step = 0.1;
//     const interval = setInterval(() => {
//       setOpacity((prev) => {
//         const newOpacity = isDeleting ? prev - step : prev + step;

//         if (isDeleting && newOpacity <= 0) {
//           clearInterval(interval);
//           setOpen(tempOpen);
//           setIsDeleting(false);
//           return 0;
//         }

//         if (!isDeleting && newOpacity >= 1) {
//           clearInterval(interval);
//           setChanging(false);
//           return 1;
//         }

//         return newOpacity;
//       });
//     }, 25);

//     return () => clearInterval(interval);
//   }, [changing, isDeleting, tempOpen]);

//   const changeOpen = (id) => {
//     if (open === id || changing) return;
//     setTempOpen(id);
//     setChanging(true);
//     setIsDeleting(true);
//   };

//   const toggleTalkExpansion = (talkIndex) => {
//     setExpandedTalks((prev) => ({
//       ...prev,
//       [talkIndex]: !prev[talkIndex],
//     }));
//   };

//   const experienceContent = Object.entries(data).map(([sectionKey, items]) => {
//     if (sectionKey !== open) return null;

//     return (
//       <div
//         key={sectionKey}
//         className="experience-content experience-active"
//         style={{ opacity }}
//         id="program"
//       >
//         {items.map((item, index) => (
//           <div className="experience-data" key={`${item[0]}-${index}`}>
//             {index % 2 === 1 && (
//               <>
//                 <div />
//                 <div>
//                   <span className="experience-rounder" />
//                   {index !== items.length - 1 && <span className="experience-line" />}
//                 </div>
//               </>
//             )}

//             <div className={index % 2 === 0 ? 'right' : 'left'}>
//               <h3 className="experience-title">{item[0]}</h3>
//               <div className="experience-calendar">
//                 <CalendarEvent />
//                 <span>{item[1]}</span>
//               </div>
//             </div>

//             {index % 2 === 0 && (
//               <div>
//                 <span className="experience-rounder" />
//                 {index !== items.length - 1 && <span className="experience-line" />}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   });

//   return (
//     <section className="experience" id="experience">
//       <h2>Agenda</h2>
//       <div className="experience-container">
//         <div className="experience-sections">{experienceContent}</div>
//       </div>

//       {/* Featured Talks Section */}
//       <div className="featured-talks">
//         <h3 className="featured-talks-heading">Featured Talks</h3>

//         {featuredTalks.map((talk, index) => (
//           <div
//             key={index}
//             className={`featured-talk ${expandedTalks[index] ? 'expanded' : 'collapsed'}`}
//             onClick={() => toggleTalkExpansion(index)}
//           >
//             {/* ✅ Header row now supports optional headshot */}
//             <div className="featured-talk-header">
//               {talk.headshot && (
//                 <img
//                   className="featured-talk-headshot"
//                   src={talk.headshot}
//                   alt={`${talk.speaker} headshot`}
//                   loading="lazy"
//                 />
//               )}

//               <div className="featured-talk-header-text">
//                 <h4 className="featured-talk-title">{talk.title}</h4>
//                 <p className="featured-talk-speaker">
//                   <strong>Speaker:</strong> {talk.speaker}
//                 </p>
//               </div>
//             </div>

//             <div className="featured-talk-content">
//               <div className="featured-talk-abstract">
//                 <h5>Abstract</h5>
//                 <div className="featured-talk-text">{talk.abstract}</div>
//               </div>

//               {talk.acknowledgements && (
//                 <div className="featured-talk-acknowledgements">
//                   <h5>Acknowledgements</h5>
//                   <div className="featured-talk-text">{talk.acknowledgements}</div>
//                 </div>
//               )}

//               {talk.bio && (
//                 <div className="featured-talk-bio">
//                   <h5>Speaker Bio</h5>
//                   <div className="featured-talk-text">{talk.bio}</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Papers Section (kept at bottom) */}
//       <div className="papers">
//         <h3 className="papers-heading">Papers</h3>
//         <ul className="papers-list">
//           {papers.map((paper) => (
//             <li key={paper.title} className="papers-item">
//               <span className="papers-title">{paper.title}</span>
//               <span className="papers-authors">{paper.authors}</span>
//               <span className="papers-contact">
//                 Contact: <a href={`mailto:${paper.contactEmail}`}>{paper.contactAuthor}</a>
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Agenda;

import React, { useState } from 'react';
import '../assets/css/WorkshopProgram.css';
import '../assets/css/Agenda.css'

// Headshot Import
import calebHeadshot from '../assets/img/Agenda/CalebHeadshot.jpg';
import remiHeadshot from '../assets/img/Agenda/RemiHeadshot.jpeg';

const Agenda = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const featuredTalks = [
    {
      id: 'remi',
      time: '09:00 - 09:30',
      title: 'Computer Vision and AI tools for automated pollinator monitoring',
      speaker: 'Dr Rémi Mégret, University of Puerto Rico, Río Piedras campus',
      headshot: remiHeadshot,
      abstract: `Pollinators and honey bees are critical for crop production worldwide, yet face accelerating threats from climate extremes and habitat loss. In this presentation, I will showcase recent developments in artificial intelligence for fine-grained and scalable pollinator monitoring. These systems generate quantitative indicators of pollinator activity and colony dynamics at both individual and colony scales, supporting biodiversity monitoring, climate resilience studies, integrative biological research, and data-informed agricultural management...`,
      acknowledgements:
        'This research is supported by NSF awards 2318597, 2321760, USDA/NIFA award 2021-67014-34999. This work uses the UPR High-Performance Computing facility, supported by NIH/NIGMS award 5P20GM103475.',
      bio: `Dr Mégret is an professor in Computer Science at University of Puerto Rico...`
    },
    {
      id: 'caleb',
      time: '08:05 - 09:00',
      title: 'Vision Based Spraying',
      speaker: 'Caleb Stuber, PTx Precision Planting',
      headshot: calebHeadshot,
      abstract: `Weed control remains one of agriculture's persistent challenges. Effective weed control can have both a financial and environmental cost to blanket apply herbicides, but the cost of ineffective control exceeds the cost of treatment. This talk explores how vision-based spraying systems are changing that equation...`,
      bio: `Caleb Stuber has spent over 12 years with PTx Precision Planting working across support, sales, and marketing roles...`
    }
  ];

  const papers = [
    {
      title:
        'On the Evaluation of Multimodal Large Language Models for Agricultural Image Classification across Diverse Tasks',
      contactAuthor: 'Anindya Bijoy Das',
      contactEmail: 'adas@uakron.edu',
      authors: 'Anindya Bijoy Das · Shibbir Ahmed · Shahnewaz Karim Sakib'
    },
    {
      title:
        'Supporting Ultra-High-Resolution Digital Agriculture Tasks with Fully Synthetic Curriculum Learning',
      contactAuthor: 'Jacob Hatef',
      contactEmail: 'hatef.4@osu.edu',
      authors:
        'Jacob Hatef · Quentin Gregory Anthony · Nawras Alnaasan · Dhabaleswar Panda'
    },
    {
      title:
        'Cott-ADNet: Lightweight Real-Time Cotton Boll and Flower Detection Under Field Conditions',
      contactAuthor: 'Rui-Feng Wang',
      contactEmail: 'sweefongreggiewong@gmail.com',
      authors:
        'Rui-Feng Wang · Mingrui Xu · Matthew C Bauer · Iago Beffart Schardong · Xiaowen Ma · Peng Chee · Kangning Cui'
    },
    {
      title:
        'FUME: Fused Unified Multi-Gas Emission Network for Livestock Rumen Acidosis Detection',
      contactAuthor: 'Taminul Islam',
      contactEmail: 'taminul.islam@siu.edu',
      authors:
        'Taminul Islam · Toqi Tahamid Sarker · Mohamed Embaby · Khaled R. Ahmed · Amer Abughazaleh'
    },
    {
      title: 'A Multi-View Photometric Stereo Pipeline for Specular 3D Fruit Reconstruction',
      contactAuthor: 'Ariel Zuñiga-Santana',
      contactEmail: 'ariel.zuniga@postgrado.uoh.cl',
      authors:
        'Ariel Zuñiga-Santana · Gabriele Facciolo · Shohei Nobuhara · Rodrigo Verschae'
    },
    {
      title:
        'Advancing Precision Livestock Farming: Robust Country Chicken Detection via FeatherNet Fusion-YOLO and HenSense',
      contactAuthor: 'Maneesh Reddy Bhavanam',
      contactEmail: 'maneeshreddy_bhavanam@srmap.edu.in',
      authors:
        'Maneesh Reddy Bhavanam · Pavan Suraj Kanna · Tamma Tarun Sai Reddy · Chaitanya Alapati'
    }
  ];

  const schedule = [
    { time: '08:00 - 08:05', title: 'Opening Remarks' },
    {
      time: '08:05 - 09:00',
      title: 'Invited Talk 1: Vision Based Spraying',
      details: featuredTalks.find((t) => t.id === 'caleb')
    },
    {
      time: '09:00 - 09:30',
      title: "Invited Talk 2: Computer Vision and AI tools for automated pollinator monitoring",
      details: featuredTalks.find((t) => t.id === 'remi')
    },
    { time: '09:30 - 10:15', title: 'Coffee Break' },
    { time: '10:15 - 10:30', title: 'Lightning Talks for Posters' },
    {
      time: '10:30 - 12:00',
      title: 'Paper Presentations',
      paperList: papers
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="workshop-program" id="program">
      <h2>Agenda</h2>

      <div className="program-container">
        {schedule.map((item, index) => {
          const isExpandable = Boolean(item.details || item.paperList);
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`program-content ${isOpen ? 'program-open' : ''}`}
            >
              <div
                className={`program-header ${isExpandable ? 'is-expandable' : ''}`}
                onClick={() => isExpandable && toggleOpen(index)}
                role={isExpandable ? 'button' : undefined}
                tabIndex={isExpandable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (!isExpandable) return;
                  if (e.key === 'Enter' || e.key === ' ') toggleOpen(index);
                }}
              >
                <div className="program-time">{item.time}</div>
                <div className="program-title">{item.title}</div>

                {isExpandable && (
                  <div className="program-arrow" aria-hidden="true">
                    {isOpen ? '▲' : '▼'}
                  </div>
                )}
              </div>

              {isOpen && isExpandable && (
                <div className="program-data" aria-expanded={isOpen}>
                  <div className="program-details">
                    {/* Talk Details */}
                    {item.details && (
                      <>
                        <div className="speaker-info">
                          <p>
                            <b>Speaker:</b> {item.details.speaker}
                          </p>

                          {item.details.headshot && (
                            <div className="speaker-image">
                              <img
                                src={item.details.headshot}
                                alt="Speaker headshot"
                                className="speaker-photo"
                              />
                            </div>
                          )}
                        </div>

                        <p>
                          <b>Abstract:</b> {item.details.abstract}
                        </p>

                        {item.details.acknowledgements && (
                          <p>
                            <b>Acknowledgements:</b> {item.details.acknowledgements}
                          </p>
                        )}

                        {item.details.bio && (
                          <p>
                            <b>Speaker Bio:</b> {item.details.bio}
                          </p>
                        )}
                      </>
                    )}

                    {/* Paper List */}
                    {item.paperList && (
                      <div className="papers-container">
                        {item.paperList.map((paper, pIdx) => (
                          <div key={pIdx} className="paper-card">
                            <h4 className="paper-title">{paper.title}</h4>
                            <p className="paper-authors">{paper.authors}</p>
                            <p className="paper-contact">
                              Contact:{' '}
                              <a href={`mailto:${paper.contactEmail}`}>
                                {paper.contactAuthor}
                              </a>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Agenda;
