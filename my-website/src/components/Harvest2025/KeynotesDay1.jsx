import React, { useState } from 'react';
import '../../assets/css/WorkshopProgram.css';
import data from '../../assets/json/workshop_schedule2025Day1.json';
import { Youtube, FileEarmarkPdfFill } from 'react-bootstrap-icons';

// 🖼️ Dynamically import all speaker headshots
const speakerImages = import.meta.glob(
  '../../assets/img/Harvest2025/HeadShots/*.{png,jpg,jpeg,svg,avif}',
  { eager: true }
);

// 📄 Dynamically import all speaker PDFs
const speakerPDFs = import.meta.glob(
  '../../assets/pdfs/Harvest2025/Presentations/*.pdf',
  { eager: true }
);

const KeynotesDay1 = () => {
  const [open, setOpen] = useState(null);

  const hasDetails = (session) => {
    const keys = Object.keys(session);
    const detailKeys = keys.filter((key) => key !== 'time' && key !== 'title');
    return detailKeys.length > 0;
  };

  return (
    <section className="workshop-program" id="program">
      <h2>Workshop Program</h2>
      <h3>Day 1</h3>
      <p className="timezone">{data.timezone}</p>

      <div className="program-container">
        {data.schedule.map((session, index) => {
          const showDetails = hasDetails(session);

          return (
            <div
              key={index}
              className={`program-content ${open === index ? 'program-open' : ''}`}
            >
              <div
                className="program-header"
                onClick={() => showDetails && setOpen(open === index ? null : index)}
                style={{ cursor: showDetails ? 'pointer' : 'default' }}
              >
                <div className="program-time">{session.time}</div>
                <div className="program-title">{session.title}</div>
                {showDetails && <div className="program-arrow">&#9660;</div>}
              </div>

              {showDetails && (
                <div
                  className="program-data"
                  aria-expanded={open === index ? 'true' : 'false'}
                >
                  <div className="program-details">
                    {/* Speaker info + image */}
                    {session.speaker && (
                      <div className="speaker-info">
                        <p>
                          <b>Speaker:</b> {session.speaker}
                        </p>
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

                    {session.speakers && (
                      <p>
                        <b>Speakers:</b> {session.speakers.join(', ')}
                      </p>
                    )}

                    {session.chair && (
                      <p>
                        <b>Session Chair:</b> {session.chair}
                      </p>
                    )}

                    {session.abstract && (
                      <p>
                        <b>Abstract:</b> {session.abstract}
                      </p>
                    )}

                    {session.bio && (
                      <p>
                        <b>Speaker Bio:</b> {session.bio}
                      </p>
                    )}

                    {/* 📄 Speaker PDF */}
                    {session.pdf && (() => {
                      const match = Object.keys(speakerPDFs).find((path) =>
                        path.includes(session.pdf)
                      );
                      if (match) {
                        return (
                          <div className="attachments">
                            <b>Talk Slides:</b>
                            <div className="attachment-links">
                              <a
                                href={speakerPDFs[match].default}
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

                    {/* Optional YouTube + other attachments */}
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

export default KeynotesDay1;
