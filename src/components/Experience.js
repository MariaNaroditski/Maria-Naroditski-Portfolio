import React from 'react';

function Experience(props) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <p>
            {props.startYear} - {props.endYear}
          </p>
        </div>
        <div className="col">
          <h4>{props.jobName}</h4>
          <p>{props.jobDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Experience;