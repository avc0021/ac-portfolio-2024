import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/about">
          <button>About Me <BsPerson /></button>
        </Link>
        <Link to="/contact">
          <button>Contact <CgPhone /></button>
        </Link>
      </nav>
      <div className="home-content">
        <div className="home-text">
          <h1>Hello there!</h1>
          <h1>I'm <b>Adam Castro</b></h1>
          <Type />
        </div>
        <Tilt>
          <img className="avatar" src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
