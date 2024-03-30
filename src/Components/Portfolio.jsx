/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "30 cybersecurity search engines for researchers.",
    description:
      "In this article, I delved into the vast realm of cybersecurity research tools by compiling a comprehensive list of 30 specialized search engines tailored for cybersecurity professionals, students, and enthusiasts alike. ",
    url: "https://www.linkedin.com/pulse/30-cybersecurity-search-engines-researchers-christopher-akintoye/?trackingId=WWeO4BUqTtixkAkhI1V6%2BQ%3D%3D",
  },
  {
    title: "GitHub Codespaces and GitHub.dev",
    description: "Video interview to explain when to use GitHub.dev...",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "RESUME/CERTIFICATES",
    description:
      "This contains my CV and certificates that attributes to my skill which includes my experience and skillset.",
    url: "https://stdntpartners-my.sharepoint.com/:f:/g/personal/christopher_akintoye_studentambassadors_com/Emi85tDC3d1NvoqGQ6nM2_YBZJRgyCmr7DnF05ugX_cFFQ?e=UwffZr",
  },
  {
    title: "Contribution to the DV App Security Layer",
    description:
      "I contributed to enhancing the security layer of the DV (Data Visualization) application by implementing robust security protocols, addressing vulnerabilities, and integrating advanced authentication mechanisms.",
    url: "https://github.com/InventorsDev/sdg-007-frontend",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
