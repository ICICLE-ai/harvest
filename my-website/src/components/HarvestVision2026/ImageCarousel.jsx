import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../../assets/css/ImageCarousel.css';

// ─── Conference Images ───
import conf1798 from '../../assets/img/HarvestVision2026/Conference/IMG_1798.jpg';
import conf1806 from '../../assets/img/HarvestVision2026/Conference/IMG_1806.jpg';
import conf1810 from '../../assets/img/HarvestVision2026/Conference/IMG_1810.jpg';
import conf2127 from '../../assets/img/HarvestVision2026/Conference/IMG_2127.jpg';
import conf2132 from '../../assets/img/HarvestVision2026/Conference/IMG_2132.jpg';
import conf2135 from '../../assets/img/HarvestVision2026/Conference/IMG_2135.jpg';
import conf7846 from '../../assets/img/HarvestVision2026/Conference/IMG_7846.jpg';
import conf7855 from '../../assets/img/HarvestVision2026/Conference/IMG_7855.jpg';
import conf7856 from '../../assets/img/HarvestVision2026/Conference/IMG_7856.jpg';
import conf7859 from '../../assets/img/HarvestVision2026/Conference/IMG_7859.jpg';
import conf7860 from '../../assets/img/HarvestVision2026/Conference/IMG_7860.jpg';
import conf7861 from '../../assets/img/HarvestVision2026/Conference/IMG_7861.jpg';

// ─── Tour Images ───
import tour2136 from '../../assets/img/HarvestVision2026/Tour/IMG_2136.jpg';
import tour2148 from '../../assets/img/HarvestVision2026/Tour/IMG_2148.jpg';
import tour2149 from '../../assets/img/HarvestVision2026/Tour/IMG_2149.jpg';
import tour2172 from '../../assets/img/HarvestVision2026/Tour/IMG_2172.jpg';
import tour2180 from '../../assets/img/HarvestVision2026/Tour/IMG_2180.jpg';
import tour2187 from '../../assets/img/HarvestVision2026/Tour/IMG_2187.jpg';
import tour2192 from '../../assets/img/HarvestVision2026/Tour/IMG_2192.jpg';
import tour2229 from '../../assets/img/HarvestVision2026/Tour/IMG_2229.jpg';
import tour2144 from '../../assets/img/HarvestVision2026/Tour/IMG_2144.jpg';
import tour2195 from '../../assets/img/HarvestVision2026/Tour/IMG_2195.jpg';
import tour2207 from '../../assets/img/HarvestVision2026/Tour/IMG_2207.jpg';


const conferenceImages = [
  conf1798, conf1806, conf1810, conf2127, conf2132, conf2135,
  conf7846, conf7855, conf7856, conf7859, conf7860, conf7861,
];

const tourImages = [
  tour2136, tour2148, tour2149, tour2172, tour2180,
  tour2187, tour2192, tour2229, tour2144, tour2195, tour2207
];

/* ── Single Carousel ── */
const Carousel = ({ images, label }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(null);
  const autoplayRef = useRef(null);
  const total = images.length;

  const goTo = useCallback(
    (index, dir) => {
      if (isTransitioning) return;
      setDirection(dir || (index > current ? 'next' : 'prev'));
      setIsTransitioning(true);
      setCurrent((index + total) % total);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [current, isTransitioning, total]
  );

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [next]);

  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  const resumeAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 5000);
  };

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  // Touch / swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoplay();
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
    resumeAutoplay();
  };

  return (
    <>
      <div
        className="carousel-container"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Label */}
        <div className="carousel-label">{label}</div>

        {/* Viewport */}
        <div className="carousel-viewport">
          <div
            className={`carousel-slide ${isTransitioning ? `slide-${direction}` : ''}`}
            key={current}
          >
            <img
              src={images[current]}
              alt={`${label} photo ${current + 1}`}
              className="carousel-image"
              onClick={() => setLightboxOpen(true)}
              loading="lazy"
            />
          </div>

          {/* Gradient overlays for arrows */}
          <div className="carousel-gradient carousel-gradient--left" />
          <div className="carousel-gradient carousel-gradient--right" />

          {/* Arrows */}
          <button className="carousel-arrow carousel-arrow--left" onClick={prev} aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="carousel-arrow carousel-arrow--right" onClick={next} aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>

        {/* Counter + Dots */}
        <div className="carousel-controls">
          <span className="carousel-counter">
            {current + 1} / {total}
          </span>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="carousel-thumbs">
          {images.map((src, i) => (
            <button
              key={i}
              className={`carousel-thumb ${i === current ? 'carousel-thumb--active' : ''}`}
              onClick={() => goTo(i)}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="carousel-lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close lightbox">
            ✕
          </button>
          <button
            className="lightbox-arrow lightbox-arrow--left"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={images[current]}
            alt={`${label} full size ${current + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-arrow lightbox-arrow--right"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>
          <span className="lightbox-counter">
            {current + 1} / {total}
          </span>
        </div>
      )}
    </>
  );
};

/* ── Main Export ── */
const ImageCarousel = () => {
  return (
    <section className="carousel-section" id="gallery">
      <h2 className="carousel-main-heading">Gallery</h2>
      <div className="carousel-grid">
        <Carousel images={conferenceImages} label="Workshop" />
        <Carousel images={tourImages} label="Biosphere Tour" />
      </div>
    </section>
  );
};

export default ImageCarousel;
