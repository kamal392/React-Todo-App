import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.message}> Enjoy your Day!</p>
  );
};

export default WelcomeMessage;
