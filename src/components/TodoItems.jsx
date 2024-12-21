import { itemsContext } from "./store/todo-items-store";
import TodoItem from "./TodoItem";
import { useContext } from "react";

const TodoItems = () => {

  const {items}=useContext(itemsContext);
  // console.log(items.map((item)=>(console.log(item.name))));
  return (
    <>
      {items.map((item,index) => (
        <TodoItem 
       key={index}
        todoDate={item.date} todoName={item.name}></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
