import React, { useState } from 'react';
import '../../assets/css/WorkshopProgram.css';
import data from '../../assets/json/workshop_schedule2025Day2.json';
import { Youtube, FileEarmarkPdfFill } from 'react-bootstrap-icons';

// 🖼️ Dynamically import all speaker headshots
const speakerImages = import.meta.glob(
  '../../assets/img/Harvest2025/HeadShots/*.{png,jpg,jpeg,svg,avif}',
  { eager: true }
);

// 📄 Dynamically import ALL PDFs (talks + posters)
const allPDFs = import.meta.glob(
  '../../assets/pdfs/Harvest2025/Presentations/*.pdf',
  { eager: true }
);

const KeynotesDay2 = () => {
  const [open, setOpen] = useState(null);

  // Helper to check if the session has details beyond time & title
  const hasDetails = (session) => {
    const keys = Object.keys(session);
    const detailKeys = keys.filter((key) => key !== 'time' && key !== 'title');
    return detailKeys.length > 0;
  };

  return (
    <section className="workshop-program" id="program">
      <h3>Day 2</h3>
      <p className="timezone">{data.timezone}</p>

      <div className="program-container">
        {data.schedule.map((session, index) => {
          const showDetails = hasDetails(session);

          return (
            <div
              key={index}
              className={`program-content ${open === index ? 'program-open' : ''}`}
            >
              {/* Header */}
              <div
                className="program-header"
                onClick={() => showDetails && setOpen(open === index ? null : index)}
                style={{ cursor: showDetails ? 'pointer' : 'default' }}
              >
                <div className="program-time">{session.time}</div>
                <div className="program-title">{session.title}</div>
                {showDetails && <div className="program-arrow">&#9660;</div>}
              </div>

              {/* Expanded content */}
              {showDetails && (
                <div
                  className="program-data"
                  aria-expanded={open === index ? 'true' : 'false'}
                >
                  <div className="program-details">
                    {/* Speaker Info + Image */}
                    {session.speaker && (
                      <div className="speaker-info">
                        <p><b>Speaker:</b> {session.speaker}</p>
                        {session.image && (() => {
                          const match = Object.keys(speakerImages).find((path) =>
                            path.includes(session.image)
                          );
                          if (match) {
                            return (
                              <div className="speaker-image">
                                <img
                                  src={speakerImages[match].default}
                                  alt={session.speaker || 'Speaker'}
                                  className="speaker-photo"
                                />
                              </div>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    )}

                    {/* Multiple speakers */}
                    {session.speakers && (
                      <p><b>Speakers:</b> {session.speakers.join(', ')}</p>
                    )}

                    {/* Chair */}
                    {session.chair && (
                      <p><b>Session Chair:</b> {session.chair}</p>
                    )}

                    {/* Abstract */}
                    {session.abstract && (
                      <p><b>Abstract:</b> {session.abstract}</p>
                    )}

                    {/* Bio */}
                    {session.bio && (
                      <p><b>Speaker Bio:</b> {session.bio}</p>
                    )}

                    {/* 📄 Speaker Talk PDF */}
                    {session.pdf && (() => {
                      const match = Object.keys(allPDFs).find((path) =>
                        path.includes(session.pdf)
                      );
                      if (match) {
                        return (
                          <div className="attachments">
                            <b>Talk Slides:</b>
                            <div className="attachment-links">
                              <a
                                href={allPDFs[match].default}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="attachment-btn pdf-btn"
                              >
                                <FileEarmarkPdfFill className="attachment-icon" /> Download Talk (PDF)
                              </a>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })()}

                    {/* 🧩 Papers Section (with optional PDFs) */}
                    {session.papers && (
                      <div className="papers-section">
                        <b>Papers:</b>
                        <ul>
                          {session.papers.map((paper, i) => {
                            const pdfMatch = paper.pdf
                              ? Object.keys(allPDFs).find((path) =>
                                  path.includes(paper.pdf)
                                )
                              : null;

                            return (
                              <li key={i}>
                                <p><b>{paper.title}</b></p>
                                <p><i>{paper.authors.join(', ')}</i></p>
                                {pdfMatch && (
                                  <a
                                    href={allPDFs[pdfMatch].default}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="attachment-btn pdf-btn"
                                  >
                                    <FileEarmarkPdfFill className="attachment-icon" /> View Slides (PDF)
                                  </a>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* 🧾 Projects / Posters Section */}
                    {session.projects && (
                      <div className="projects-section">
                        <b>Projects and Posters:</b>
                        <ul>
                          {session.projects.map((project, i) => {
                            const pdfMatch = project.pdf
                              ? Object.keys(allPDFs).find((path) =>
                                  path.includes(project.pdf)
                                )
                              : null;

                            return (
                              <li key={i}>
                                <p><b>{project.title}</b></p>
                                <p><i>{project.authors.join(', ')}</i></p>
                                {pdfMatch && (
                                  <a
                                    href={allPDFs[pdfMatch].default}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="attachment-btn pdf-btn"
                                  >
                                    <FileEarmarkPdfFill className="attachment-icon" /> View Poster (PDF)
                                  </a>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* 🎥 Optional Attachments */}
                    {session.attachments &&
                      (session.attachments.youtube || session.attachments.pdf) && (
                        <div className="attachments">
                          <b>Attachments:</b>
                          <div className="attachment-links">
                            {session.attachments.youtube && (
                              <a
                                href={session.attachments.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="attachment-btn youtube-btn"
                              >
                                <Youtube className="attachment-icon" /> YouTube
                              </a>
                            )}
                            {session.attachments.pdf && (
                              <a
                                href={session.attachments.pdf}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="attachment-btn pdf-btn"
                              >
                                <FileEarmarkPdfFill className="attachment-icon" /> Slides (PDF)
                              </a>
                            )}
                          </div>
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

export default KeynotesDay2;
