/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am currently a student of Computer Sciences, where I am deeply engaged in exploring various facets of technology. My passion lies in creating innovative solutions and tackling challenges in cybersecurity and engineering. Additionally, I have a strong interest in web3 and blockchain security, as I believe in the transformative potential of decentralized technologies. Through my studies and practical experiences, I am committed to contributing to the advancement of cybersecurity practices and the development of secure, user-friendly systems. I am excited to continue learning and exploring new opportunities to merge my technical knowledge with creative problem-solving skills in the field of cybersecurity and beyond."";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML",
  "CSS",
  "AZURE",
  "SPLUNK CORE",
  "AWS",
  "GOOGLE CHRONICLE",
  "NMAP",
  "BURP SUITE",
  "METASPLOIT",
  "GIT",
  "MICROSOFT SENTINEL",
  "JAVA",
  "PYTHON",
  "CRYPTOGRAPHY",

];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a security professional, engineer, and specialist in web3 and blockchain security, I am deeply passionate about solving challenges in innovative ways to drive progress and ensure the integrity of digital systems. My dedication to staying ahead of emerging threats and leveraging cutting-edge technologies allows me to continuously explore new avenues for enhancing security while maintaining accessibility for all users. I thrive on the opportunity to apply creative problem-solving skills to safeguard digital assets and enable the adoption of secure, decentralized technologies. 

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
