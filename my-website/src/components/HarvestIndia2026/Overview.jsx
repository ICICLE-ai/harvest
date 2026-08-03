import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/About.css';

const Overview = () => {
  return (
    <section className="about" id="overview">
      <h2>Workshop Overview</h2>

      <ul className="left-align">
        <li>By 2050, the global population is projected to reach <strong>9.8 billion</strong>, with accelerating climate extremes and a halving of arable land per capita (vs. 1985), making food security and sustainability urgent.</li>
        <li>Modern AI systems powered by <strong>high-performance computing</strong> are reshaping agriculture, yet their combined impact on the domain has yet to be fully explored. <strong>HARVEST-India 2026</strong> brings together researchers and software/hardware designers from academia, industry, and national laboratories who build HPC-powered, AI-enabled systems for agriculture.</li>
        <li>The workshop translates end-to-end pipelines built by the <strong>NSF ICICLE AI Institute</strong> community &mdash; edge-to-HPC data movement, semi-supervised labeling, scalable training, and in-field inference &mdash; into accessible tools for:
          <ul>
            <li>Small and large farms</li>
            <li>Agricultural research</li>
            <li>Staple and specialty crops</li>
            <li>Underrepresented communities</li>
          </ul>
        </li>
      </ul>

      <h3>About the Series</h3>
      <ul className="left-align">
        <li>The <strong>HARVEST Workshop Series</strong> was launched to build community and cyberinfrastructure at the intersection of AI, HPC, and agriculture. This is its <strong>third edition</strong>.</li>
        <li>The <strong><Link to="/past-events/2025">1st edition</Link></strong> was held at the 54th International Conference on Parallel Processing (ICPP 2025) in San Diego, CA, drawing ~30 participants from academia, national labs, and industry, with travel awards for 12 rising researchers through the NSF AI Institutes Virtual Organization.</li>
        <li>The <strong><Link to="/past-events/harvest-vision-2026">2nd edition</Link></strong>, HARVEST-Vision, was held in cooperation with the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2026) in Tucson, AZ, featuring two invited talks and six peer-reviewed papers published in the WACV 2026 proceedings.</li>
        <li>The series is supported by the NSF ICICLE AI Institute, led by <strong>The Ohio State University</strong>.</li>
      </ul>

      <p>
        <Link to="/past-events">Browse all past editions &rarr;</Link>
      </p>
    </section>
  );
};

export default Overview;
