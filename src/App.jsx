import Name from "./components/Name";
import ListName from "./components/ListName";
import TodoItems from "./components/TodoItems";
import OpeningMsg from "./components/OpeningMsg";
import "./App.css";
import { useReducer } from "react";
// import { useState } from "react";
import { itemsContext } from "./components/store/todo-items-store";

const todoItemReducer = (currItem, action) => {
  let newItem = currItem;
  if (action.type === "NEW_ITEM") {
    newItem = [
      ...currItem,
      {
        name: action.payload.name,
        date: action.payload.date,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItem = currItem.filter((item) => item.name !== action.payload.name);
  }
  return newItem;
};

function App() {
  // let [items, setitems] = useState([{ name: "buy ghee", date: "Today" }]);

  const [items, dispatchitems] = useReducer(todoItemReducer, []);

  // const handleAddBtn = (Name, Date) => {
  //   // console.log(`${Name} ${Date}`);
  //   let newitem = [...items, { name: Name, date: Date }];
  //   setitems(newitem);
  // };

  // const handleDeleteBtn = (Name) => {
  //   const delitem = items.filter((item) => item.name !== Name);
  //   setitems(delitem);
  // };

  const handleAddBtn = (Name, Date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name: Name,
        date: Date,
      },
    };
    dispatchitems(newItemAction);
  };

  const handleDeleteBtn = (Name) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name: Name,
      },
    };
    dispatchitems(deleteItemAction);
  };

  return (
    <itemsContext.Provider
      value={{
        items,
        handleAddBtn,
        handleDeleteBtn,
      }}
    >
      <center className="todo-container">
        <Name />
        <ListName handleAddBtn={handleAddBtn} />
        <OpeningMsg></OpeningMsg>
        <TodoItems handleDeleteBtn={handleDeleteBtn}></TodoItems>
      </center>
    </itemsContext.Provider>
  );
}

export default App;
