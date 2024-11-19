import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  // states for the app
  const [todoItems, setTodoItems] = useState([]);
  //function to display items
  const addNewItem = (taskName, taskDueDate) => {
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
  const deleteItem = (todoName) => {
    // console.log(todoName);
    // create newTaskArray after delete items from array
    const newTaskArray = todoItems.filter((item) => {
      return item.name !== todoName;
    });
    // resetting the array after deleting the item from current items array
    setTodoItems(newTaskArray);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo />
        {/* removed todoItems as a prop from welcomeMessage and TodoItems components coz we are using useContext*/}
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
