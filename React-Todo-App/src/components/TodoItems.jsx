import styles from "./TodoItems.module.css";

// import TodoItem to use it in map method.
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, handleDeleteButton }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => {
        return (
          // passing data to TodoItem using prop
          <TodoItem
            todoName={item.name}
            todoDate={item.dueDate}
            key={item.name}
            handleDeleteButton={handleDeleteButton}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
