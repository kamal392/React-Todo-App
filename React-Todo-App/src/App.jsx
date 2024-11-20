import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
// useReducer takes a pure function as an argument called reducer function. reducer function takes current value and action object and returns the updated state.
const todoItemsReducer = (currentTodoItems, action) => {
  let newToDoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currentTodoItems,
      { name: action.payload.taskName, dueDate: action.payload.taskDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currentTodoItems.filter((item) => {
      return item.name !== action.payload.todoName;
    });
  }
  return newToDoItems;
};

function App() {
  // const [todoItems, setTodoItems] = useState();
  // replacing useState with useReducer for complex state management .
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  //function to display items
  const addNewItem = (taskName, taskDueDate) => {
    //earlier we were updating states by directly passing the value , later we are passing an anonymous function with the previous value as an argument  to get the latest value of the state to update it with setTodoItems.
    //newItemAction is an object which holds value given by the user.
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        taskName,
        taskDueDate,
      },
    };
    //  dispatch function dispatch the action object to reducer function to update the state value.
    dispatchTodoItems(newItemAction);
  };

  // handle delete button.
  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoName,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
