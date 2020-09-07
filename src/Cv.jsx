import React, { Component } from "react";
import axios from "axios";

class Cv extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    axios.get('./src/data/jobs.json')
      .then(response => {
        this.setState({
          jobs: response.data,
        });
      });
  }

  render() {
    const projects = this.state.jobs;
    let projectsList;
    
    if (projects.length > 0) {
      projectsList = projects.map((job) => {
      return (
        <div id={"job-" + job.id} key={job.id}>
          <h3 className="ui header">{job.name}</h3>
        </div>
        );
    });
  }

  return (
    <div className="ui main container">
    <h1 id="jobs-header" className="ui header">
    My Jobs
    </h1>
    {projectsList}
    </div>
  );
  }
}


export default Cv;