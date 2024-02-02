import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-intro">
        <h1 className="skills-title">Compétences</h1>
        <p>
          Développeur Front-end débutant, je souhaite faire de React JS ma
          spécialité.
        </p>
        <p>Je suis à votre disposition pour collaborer !</p>
      </div>
      <div className="skills-bloc">
        <div className="skills-bloc-text">
          <h2>Front-end</h2>
          <p>
            Mon apprentissage du Web est actuellement centré sur ces
            technologies, néanmoins j'ai pour ambition de m'adapter à d'autres
            technologies selon les besoins des projets.
          </p>
        </div>
        <div className="skills-icons">
          <ul>
            <li>
              <img
                src="./pictures/html5.svg"
                alt="html 5 icon"
                className="skill-icon"
              />
            </li>
            <li>
              <img
                src="./pictures/css3.svg"
                alt="css3 icon"
                className="skill-icon"
              />
            </li>
            <li>
              <img
                src="./pictures/javascript.svg"
                alt="javascript icon"
                className="skill-icon"
              />
            </li>
            <li>
              <img
                src="./pictures/reactjs.svg"
                alt="reactjs icon"
                className="skill-icon"
              />
            </li>
            <li>
              <img
                src="./pictures/sass.svg"
                alt="sass icon"
                className="skill-icon"
              />
            </li>
            <li>
              <img
                src="./pictures/figma.svg"
                alt="figma icon"
                className="skill-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
