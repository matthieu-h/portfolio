import React from "react";
import data from "../../src/data/portfolioData.json";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>

      <p className="portfolio-para">
        Voici quelques uns de mes projets réalisés lors de ma formation
        Intégrateur Web au sein d'OpenClassrooms.
      </p>

      <div className="portfolio-gallery">
        {data.map((item) => (
          <div key={item.id} className="gallery-item">
            <img
              src={item.picture}
              alt="aperçu du site web"
              className="project-picture"
            />
            <div className="overlay">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a
                href={item.websiteLink}
                className={`${
                  item.websiteLink
                    ? "websitelink-exist"
                    : "websitelink-not-exist"
                }`}
              >
                Voir le site web
              </a>
              <a href={item.githubRepoLink}>Voir le dépot github</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
// {`{${item.websiteLink} ? "websitelink-exist" : "websitelink-not-exist"}`}
