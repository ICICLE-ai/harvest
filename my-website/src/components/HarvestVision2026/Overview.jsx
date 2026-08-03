import React from 'react';
import '../../assets/css/About.css';

const Overview = () => {
  return (
    <section className="about" id="overview">
      <h2>Workshop Overview</h2>

      <ul className="left-align">
        <li>By 2050, the global population is projected to reach <strong>9.8 billion</strong>, with accelerating climate extremes and a halving of arable land per capita (vs. 1985), making food security and sustainability urgent.</li>
        <li><strong>HARVEST-Vision</strong> addressed this need by democratizing digital agriculture and translating end-to-end AI pipelines from the <strong>NSF ICICLE AI Institute</strong> community into accessible tools for:
          <ul>
            <li>Small and large farms</li>
            <li>Agricultural research</li>
            <li>Staple and specialty crops</li>
            <li>Underrepresented communities</li>
          </ul>
        </li>
      </ul>

      <ul className="left-align">
        <li>The <strong>HARVEST Workshop Series</strong> was launched to build community and cyberinfrastructure at the intersection of AI, HPC, and agriculture.</li>
        <li>The first workshop was hosted at the <strong>54th International Conference on Parallel Processing</strong> in San Diego, CA, supported by the NSF ICICLE AI Institute led by <strong>The Ohio State University</strong>.</li>
        <li>The event featured:
          <ul>
            <li>High-profile keynote speakers</li>
            <li>Technical talks, panels, and hands-on demonstrations</li>
            <li>~30 participants from academia, national labs, and industry</li>
          </ul>
        </li>
        <li>Through collaboration with the NSF AI Institutes Virtual Organization, travel awards were secured for 12 rising academic researchers &mdash; many now part of a growing expert network connecting computer scientists and agricultural specialists.</li>
      </ul>
    </section>
  );
};

export default Overview;
