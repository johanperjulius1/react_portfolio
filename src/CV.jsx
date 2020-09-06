import React, { Component } from 'react';
import axios from 'axios';

class CV extends Component {
  state = {
    cvExperiences: [],
  };

  componentDidMount() {
    axios.get('.src/data/cv.json')

  };


}
export default CV;