import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";
import UndrawADayAtThePark from "react-undraw-illustrations/lib/components/UndrawADayAtThePark";

class Cvs extends Component {
  state = {
    cvs: [],
  };

  componentDidMount() {
    axios.get("./src/data/cvs.json")
      .then((response) => {
        this.setState({
          cvs: response.data,
        });
      });
  }

  render() {
    const cvs = this.state.cvs;
    let cvsList;

    if (cvs.length > 0) {
      cvsList = cvs.map((cv) => {
        return (
          <div id ={"cv-" + cv.id} key={cv.id}>
            <CvCard cv={cv} />
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
              <h1 id="projects-header" className="ui header"> My CV</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat 
                ex animi reprehenderit officiis reiciendis laboriosam amet tempora illo, 
                molestiae recusandae? Incidunt magnam in natus commodi tempora vel fugit quod.
              </p>
          </div>
        </div>
        <div className="ui stackable four column grid">{cvsList}</div>
      </div>
    );
  }  
}

export default Cvs;