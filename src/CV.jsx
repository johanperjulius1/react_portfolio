import React, { Component } from 'react';
import axios from 'axios';

class CV extends Component {
  state = {
    cvExperiences: [],
  };

  componentDidMount() {
    axios.get('.src/data/cv.json')
      .then(response => {
        this.setState({
          cvExperiences: response.data,
        });
      });
  };

render() {
  const cvExperiences = this.state.cvExperiences;
  let cvExperiencesList;

  if (cvExperiences > 0) {
    cvExperiencesList = cvExperiences.map((cvExperience) => {
      return (
        <div id ={'cvExperience-' + cvExperience.id} key={cvExperience.id}>
          <CVExperienceCard cvExperience={cvExperiences} />
        </div>
      );
    });
  }

  return (
    
  );




}  

}
export default CV;