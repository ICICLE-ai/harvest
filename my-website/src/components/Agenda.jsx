import React, { useState } from 'react';
import '../assets/css/Agenda.css';

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
      abstract: `Pollinators and honey bees are critical for crop production worldwide, yet face accelerating threats from climate extremes and habitat loss. In this presentation, I will showcase recent developments in artificial intelligence for fine-grained and scalable pollinator monitoring. These systems generate quantitative indicators of pollinator activity and colony dynamics at both individual and colony scales, supporting biodiversity monitoring, climate resilience studies, integrative biological research, and data-informed agricultural management.

We will discuss several complementary AI-enabled systems. First, real-time computer vision monitoring of artificial flower patches dynamically captures honey bee visitation and behavior, providing immediate feedback for controlled behavioral assays relevant to crop pollination studies and breeding programs. Second, a high-performance computing pipeline analyzes weeks of continuous video from hive entrances, combining QR-code tagging and deep learning models for long-term individual identification and behavioral pattern analysis.

This work leverages lightweight marking strategies, domain-adapted computer vision models, and a combination of edge-based video acquisition and preprocessing with high-performance computing for large-scale analysis. Supporting these advances, the LabelBee web application ecosystem facilitates visualization, annotation, and management of large video datasets, lowering barriers to AI-driven pollinator research. Beyond research deployment, we will discuss current efforts in the deployment of these tools to support AI literacy through K12 convergent research experiences focused on pollinator monitoring.

Acknowledgements: This research is supported by NSF awards 2318597, 2321760, USDA/NIFA award 2021-67014-34999. This work uses the UPR High-Performance Computing facility, supported by NIH/NIGMS award 5P20GM103475.`,
      acknowledgements:
        'This research is supported by NSF awards 2318597, 2321760, USDA/NIFA award 2021-67014-34999. This work uses the UPR High-Performance Computing facility, supported by NIH/NIGMS award 5P20GM103475.',
      bio: `Dr Mégret is an professor in Computer Science at University of Puerto Rico, Río Piedras campus (UPR-RP). His expertise is in computer vision and machine learning. During his tenures at Bordeaux Institute of Technology, France then at UPR, he has contributed to multiple national and international collaborative research projects with both academia and industrial partners. Applications include remote sensing using unmanned aerial vehicles and analysis of videos from wearable cameras. His recent projects focus on the application of Computer Vision and Deep Learning to Experimental Sciences, through collaborations with researchers from Biology, Physics and Material Sciences. He is currently the PI of NSF project CyIndiBee developing automated tools for video monitoring of honeybees and Co-PI of NSF project E-RISE Blueprint of life focusing on the integration of computational and AI tools for developmental biology. Dr Mégret is also passionate about training the next generation of computer scientists and hope to grow the capacity for innovation in artificial intelligence and machine learning in Puerto Rico.`
    },
    {
      id: 'caleb',
      time: '08:05 - 09:00',
      title: 'Vision Based Spraying',
      speaker: 'Caleb Stuber, PTx Precision Planting',
      headshot: calebHeadshot,
      abstract: `Weed control remains one of agriculture's persistent challenges.  Effective weed control can have both a financial and environmental cost to blanket apply herbicides, but the cost of ineffective control exceeds the cost of treatment.  This talk explores how vision-based spraying systems are changing that equation.  By using real-time imaging and decision systems to selectively target weeds instead of blanket-applying herbicides, growers can reduce chemical use while protecting yield.  Drawing on real-world deployment examples, this session will also examine the challenges of building a reliable system that performs under variability of production agriculture.`,
      bio: `Caleb Stuber has spent over 12 years with PTx Precision Planting working across support, sales, and marketing roles.  He currently works in strategic marketing where he is involved with helping to bring new innovative agriculture products to market.  Caleb has worked closely with product development teams and growers to implement precision agriculture systems spanning the planting pass through harvest, including hands-on experience on his family's farm.  His experience bridges technical knowledge and field application, offering practice insights into the real-world deployment of agriculture technology.`
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

  const posters = [
    {
      title:
        'Spatio-Temporal Latent Manifold Adaption for Early Stress Detection in Precision Agriculture',
      contactAuthor: '',
      contactEmail: '',
      authors: ''
    },
    {
      title:
        'Deep Learning in the Field: Lightweight CNN/ViT Soybean LAI Estimation from UAV Point Cloud Heatmaps',
      contactAuthor: '',
      contactEmail: '',
      authors: ''
    },
    {
      title: '',
      contactAuthor: '',
      contactEmail: '',
      authors: ''
    }
  ];

  const schedule = [
    { time: '08:00 - 08:05', title: 'Opening Remarks' },
    {
      time: '08:05 - 09:00',
      title: 'Keynote Talk: Vision Based Spraying',
      details: featuredTalks.find((t) => t.id === 'caleb')
    },
    {
      time: '09:00 - 09:30',
      title: 'Invited Talk: Computer Vision and AI tools for automated pollinator monitoring',
      details: featuredTalks.find((t) => t.id === 'remi')
    },
    { time: '09:30 - 10:15', title: 'Coffee Break' },

    // ✅ NOW EXPANDABLE (shows posters)
    {
      time: '10:15 - 10:30',
      title: 'Lightning Talks for Posters (5 min per poster)',
      posterList: posters
    },

    {
      time: '10:30 - 12:00',
      title: 'Paper Presentations (15 min per paper)',
      paperList: papers
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="agenda" id="program">
      <h2 className="agenda">Agenda</h2>

      <div className="program-container">
        {schedule.map((item, index) => {
          // ✅ include posterList in expandable logic
          const isExpandable = Boolean(item.details || item.paperList || item.posterList);
          const isOpen = openIndex === index;

          return (
            <div key={index} className={`program-content ${isOpen ? 'program-open' : ''}`}>
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

                    {/* ✅ Poster List (new, expandable like papers) */}
                    {item.posterList && (
                      <div className="papers-container">
                        {item.posterList
                          .filter((p) => (p.title || '').trim().length > 0)
                          .map((poster, pIdx) => (
                            <div key={pIdx} className="paper-card">
                              <h4 className="paper-title">{poster.title}</h4>

                              {!!(poster.authors || '').trim() && (
                                <p className="paper-authors">
                                  <b>Authors: </b>
                                  {poster.authors}
                                </p>
                              )}

                              {!!(poster.contactEmail || '').trim() &&
                              !!(poster.contactAuthor || '').trim() ? (
                                <p className="paper-contact">
                                  Presenter:{' '}
                                  <a href={`mailto:${poster.contactEmail}`}>
                                    {poster.contactAuthor}
                                  </a>
                                </p>
                              ) : null}

                              <hr />
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Paper List */}
                    {item.paperList && (
                      <div className="papers-container">
                        {item.paperList.map((paper, pIdx) => (
                          <div key={pIdx} className="paper-card">
                            <h4 className="paper-title">{paper.title}</h4>
                            <p className="paper-authors">
                              <b>Authors: </b>
                              {paper.authors}
                            </p>
                            <p className="paper-contact">
                              Presenter:{' '}
                              <a href={`mailto:${paper.contactEmail}`}>{paper.contactAuthor}</a>
                            </p>
                            <hr />
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