import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
// console.log(`${TodoItemsContext}`);
const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => {
        return (
          // passing data to TodoItem using prop
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
