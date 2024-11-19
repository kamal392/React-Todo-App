import { useContext, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  // let [taskName, setTaskName] = useState("");
  // let [taskDueDate, setTaskDueDate] = useState("");
  // here we have replaced useState hook with useRef()
  let toDoNameElement = useRef();
  let dueDateElement = useRef();
  // using useContext to get data from global storage
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  // on click on add button calls handleAddButtonClick function which is calling displayToDoItems function
  let handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = toDoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
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
