// import TodoItem to use it in map method.
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          // passing data to TodoItem using prop
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
