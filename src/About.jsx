import React from "react";
import { UndrawArtLover } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawArtLover primaryColor='#12283a' height='200px'/>
        </div>
      <div class="column">  
          <h1 id="about-header" className="ui header">About Me</h1>
          <p>
        My hometown is Örebro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;