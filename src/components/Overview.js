import React from "react";

const Overview = (props) => {
  return (
    <div>
      <ol>
        {props.taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
};

export default Overview;
