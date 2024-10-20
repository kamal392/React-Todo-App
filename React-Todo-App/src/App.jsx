import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items-container">
        <AddTodo />
        <TodoItem
          todoName={"Buy React course"}
          todoDate={"10/20/2024"}
        ></TodoItem>
        <TodoItem
          todoName={"Buy javascript course"}
          todoDate={"10/20/2024"}
        ></TodoItem>
      </div>
    </center>
  );
}
export default App;
