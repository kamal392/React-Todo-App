import { useRef } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ displayToDoItems }) {
  // let [taskName, setTaskName] = useState("");
  // let [taskDueDate, setTaskDueDate] = useState("");

  let toDoNameElement = useRef();
  let dueDateElement = useRef();

  // on click on add button calls handleAddButtonClick function which is calling displayToDoItems function
  let handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = toDoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    displayToDoItems(todoName, dueDate);
  };
  return (
    // add bootstrap grid layout
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={toDoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
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
