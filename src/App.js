import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  state = {
    task: "",
    taskArray: [],
  };

  updateTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  appendTask = () => {
    const { task, taskArray } = this.state;
    this.setState({
      taskArray: taskArray.concat(task),
    });
  };

  render() {
    const { taskArray } = this.state;
    if (taskArray) {
    }
    return (
      <div className="App">
        <input type="text" onChange={this.updateTask}></input>
        <button type="submit" onClick={this.appendTask}>
          Submit
        </button>
        <Overview taskList={taskArray} />
      </div>
    );
  }
}

export default App;
