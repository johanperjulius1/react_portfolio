import React from "react";

const JobCard = ({ job }) => {
  return (
    <>
      <div class="ui card">
        <div class ="image">
          <img src={job.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{job.name}</h3>

      <div class ="description">{job.description}</div>
        </div>
      </div>

    </>
  );
};


export default JobCard;