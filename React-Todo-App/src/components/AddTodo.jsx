import { useState } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ displayToDoItems }) {
  let [taskName, setTaskName] = useState("");
  let [taskDueDate, setTaskDueDate] = useState("");

  let handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  let handleDateChange = (event) => {
    setTaskDueDate(event.target.value);
  };
  // on click on add button calls handleAddButtonClick function which is calling displayToDoItems function
  let handleAddButtonClick = (event) => {
    event.preventDefault();
    displayToDoItems(taskName, taskDueDate);
    setTaskName("");
    setTaskDueDate("");
  };
  return (
    // add bootstrap grid layout
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={taskName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={taskDueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
