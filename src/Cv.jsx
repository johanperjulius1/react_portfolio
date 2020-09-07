import React, { Component } from "react";


class Cv extends Component {
  state = {
    projects: [
      {
        id:1,
        name: "My First Job",
      },
      {
        id:2,
        name:"Equity Research",
      },
      {
        id:3,
        name:"Sales Analyst Team Leader",
      },
    ],
  };

  render() {
    const projects = this.state.projects;
    let projectsList;
    
    if (projects.length > 0) {
      projectsList = projects.map((project) => {
      return (
        <div id={"job-" + project.id} key={project.id}>
          <h3 className="ui header">{project.name}</h3>
        </div>
        );
    });
  }

  return (
    <div className="ui main container">
    <h1 id="projects-header" className="ui header">
    My jobs
    </h1>
    {projectsList}
    </div>
  );
  }
}


export default Cv;