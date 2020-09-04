import React, { Component } from "react";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "My First Website",
      },
      {
        id: 2,
        name: "FizzBuzz",
      },
    ],
  };

  render() {
    const projects = this.state.projects;
    let projectList;

    if (projects.length > 0 {
      projectList = projects.map((project) => {
        return (
          <div id ={"project-" + project.id} key={project.id}>
            <h3 className="ui header">{project.name}</h3>
          </div>
        );
      });
    }


    return()
    <div className="ui main container">
      <h1 id="projects-header" className="ui header">
        My Projects
      </h1>
      {projectList}
    </div>
    );
  }

export default Projects;