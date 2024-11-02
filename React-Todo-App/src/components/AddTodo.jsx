import { useState } from "react";

function AddTodo({ displayToDoItems }) {
  let [taskName, setTaskName] = useState();
  let [taskDueDate, setTaskDueDate] = useState();

  let handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  let handleDateChange = (event) => {
    setTaskDueDate(event.target.value);
  };

  let handleAddButtonClick = () => {
    displayToDoItems(taskName, taskDueDate);
    setTaskName("");
    setTaskDueDate("");
  };
  return (
    // add bootstrap grid layout
    <div className="container">
      <div className="row kg-row">
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
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => {
              handleAddButtonClick();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
