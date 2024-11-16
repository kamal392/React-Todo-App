import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
function App() {
  // states for the app
  const [todoItems, setTodoItems] = useState([]);
  //function to display items
  const displayToDoItems = (taskName, taskDueDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue,
        {
          name: taskName,
          dueDate: taskDueDate,
        },
      ];
      return newTodoItems;
    });
  };
  // handle delete button function.
  const handleDeleteButton = (todoName) => {
    // console.log(todoName);
    // create newTaskArray after delete items from array
    const newTaskArray = todoItems.filter((item) => {
      return item.name !== todoName;
    });
    // resetting the array after deleting the item from current items array
    setTodoItems(newTaskArray);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo displayToDoItems={displayToDoItems} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        handleDeleteButton={handleDeleteButton}
      ></TodoItems>
    </center>
  );
}
export default App;
