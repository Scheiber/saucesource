import "./About.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="about">
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | About</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="about-kicker">
      Set your appetite <span className="fire">ablaze</span>.
    </h1>
    <div className="about-text">
      <p>
        Looking to spice up your life? SauceSource is a web app that lets you learn
        about and curate different types of hot sauces.
      </p>
      <p>
        You can use this site to see a selection of a variety of sauces,
        complete with images of their bottles, as well as information about
        their rating on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.chilipeppermadness.com/frequently-asked-questions/the-scoville-scale/"
        >
          the Scoville Scale
        </a>
        , what foods they go best with, and if the sauce is organic or kosher.
      </p>
      <p>Feel the burn and add some fuel to your fire.</p>
      <h3 className="about-header">What is a Scoville Heat Unit (SHU)?</h3>
      <p>
        {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.chilipeppermadness.com/frequently-asked-questions/the-scoville-scale/"
        >
          The Scoville Scale
        </a>{" "}
        measures the pungency (spiciness or "heat") of chili peppers, and is
        recorded in a unit of measurement known as Scoville Heat Units (SHU).
        The higher the number of SHUs a sauce has, the more intense and "hot"
        the sauce will be.
      </p>
      <h3 className="about-header">What is organic?</h3>
      <p>
        Certified organic foods are grown and processed according to federal
        guidelines addressing, among many factors, soil quality, pest and weed
        control, and use of additives. Organic producers rely on natural
        substances and physical, mechanical, or biologically based farming
        methods to the fullest extent possible.{" "}
        <a href="https://www.usda.gov/media/blog/2012/03/22/organic-101-what-usda-organic-label-means">
          Learn more about organic farming.
        </a>
      </p>
      <h3 className="about-header">What is kosher?</h3>
      <p>
        The word "kosher" means fit or proper as it relates to Jewish dietary
        law. Kosher foods are permitted to be eaten by those who follow a kosher
        diet, and can be used as ingredients in the production of additional
        food items.{" "}
        <a href="https://oukosher.org/the-kosher-primer/">
          Learn more about the laws of kosher.
        </a>
      </p>
    </div>
    <article>
      <img
        className="wordmark"
        src="./images/wordmark.png"
        alt="SauceSource Wordmark"
      />
      <h3 className="about-header">Created by Jonathan Scheiber</h3>
      <h4>"The Boss of the Sauce"</h4>
    </article>
    <article>
      <img
        className="headshot"
        src="./images/jonathan.png"
        alt="Headshot of Jonathan Scheiber"
      />
    </article>
    <p className="bio-text">
      Jonathan is a full-stack web developer with a background in IT and
      customer service from New York, NY.
      <br /> His interests include user experience (UX) design, cybersecurity,
      and accessibility.
    </p>
    <a target="_blank" rel="noopener noreferrer" href="https://scheiber.dev/">
      <img
        className="icon"
        alt="Website"
        title="Website"
        src="./icons/website.png"
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Scheiber"
    >
      <img
        className="icon"
        alt="GitHub"
        title="GitHub"
        src="./icons/github.png"
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/jonscheiber/"
    >
      <img
        className="icon"
        alt="LinkedIn"
        title="LinkedIn"
        src="./icons/linkedin.png"
      />
    </a>
    <p className="about-text">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Scheiber/saucesource"
      >
        Technical information and "sauce" code
      </a>{" "}
      available on GitHub.
    </p>
  </div>
);

export default About;
