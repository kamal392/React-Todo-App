import { createContext } from "react";
// create a variable using createContext method provided by react and give it a initial value.
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
