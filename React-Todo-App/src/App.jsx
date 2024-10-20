import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  // Create data
  const todoItems = [
    { name: "Buy React course", dueDate: "10/20/2024" },
    { name: "Buy Html course", dueDate: "10/21/2024" },
    { name: "Buy javaScript course", dueDate: "10/22/2024" },
    { name: "Buy html course", dueDate: "10/22/2024" },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default App;
