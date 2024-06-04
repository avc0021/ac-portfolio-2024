import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/avatar.png";
import { AiOutlineFileText, AiOutlineProject } from "react-icons/ai";

const Home = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/resume">
          <button>
            Resume <AiOutlineFileText />
          </button>
        </Link>
        <Link to="/project">
          <button>
            Projects <AiOutlineProject />
          </button>
        </Link>
      </nav>
      <div className="home-content">
        <Tilt>
          <img className="avatar" src={Avatar} alt="Avatar" />
        </Tilt>
        <div className="home-text">
          <h1>Adam Castro</h1>
          <Type />
        </div>
      </div>
      <div className="home-extra">
        <div className="about-section">
          <h3>About Me</h3>
          <p>
            Hello! I'm Adam, a web and mobile technology enthusiast at the
            University of the Incarnate Word. I specialize in transforming
            digital interactions with my expertise in JavaScript, React, NodeJS,
            and AWS. My experience spans across various tools and technologies,
            including Git, Azure, GraphQL, and MaterialUI. As a new father,
            balancing family life with my career has honed my creativity and
            problem-solving skills. I thrive on collaboration and believe the
            best tech solutions are intuitive and user-friendly.
          </p>
        </div>
        <div className="contact-section">
          <h3>Contact</h3>
          <ul className="contact-links">
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
