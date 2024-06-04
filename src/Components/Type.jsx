import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "JavaScript Enthusiast",
            "Full Stack Developer",
            "React Expert",
            "Agile Practitioner",
            "Frontend Developer",
            "UI/UX Designer",
            "Software Engineer",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;
