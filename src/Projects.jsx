import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import UndrawADayAtThePark from "react-undraw-illustrations/lib/components/UndrawADayAtThePark";




class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data,
        });
      });
  };

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (
          <div id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }
      return (
        <div className="ui main container">
          <div className="ui stackable two column grid">
            <div className="column">
              <UndrawADayAtThePark primaryColor='#12283a' height='200px' />
            </div>
            <div className="column">
              <h1 id="projects-header" className="ui header"> My Projects</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat 
                ex animi reprehenderit officiis reiciendis laboriosam amet tempora illo, 
                molestiae recusandae? Incidunt magnam in natus commodi tempora vel fugit quod.
              </p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}

export default Projects;