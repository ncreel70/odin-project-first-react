import React from "react";

const Overview = (props) => {
  return (
    <div>
      <ul>
        {props.taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
