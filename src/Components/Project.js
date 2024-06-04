import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineFileText, AiOutlineProject } from "react-icons/ai";

const Project = () => {
  return (
    <div>
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
      <h1>Project Page</h1>
      
    </div>
  );
};

export default Project;
