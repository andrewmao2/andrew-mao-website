import React from 'react';
import "./skills.css";
import Languages from './Languages';
import Technologies from './Technologies';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">About Me!</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="skills__container container grid">
            <Languages />
            <Technologies />


        </div>
    </section>
  )
}

export default Skills
