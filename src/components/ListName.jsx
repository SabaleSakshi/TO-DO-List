import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { itemsContext } from "./store/todo-items-store";

function ListName() {
  const { handleAddBtn } = useContext(itemsContext);

  const Name = useRef();
  const Date = useRef();

  const addBtn = (event) => {
    event.preventDefault();
    let todoName = Name.current.value;
    let todoDate = Date.current.value;
    // console.log(Name,Date)
    handleAddBtn(todoName, todoDate);
    Name.current.value = "";
    Date.current.value = "";
  };

  return (
    <div className="container">
      <form className="row">
        <div className="col">
          <input type="text" ref={Name} placeholder="Enter TO-DO Here" />
        </div>
        <div className="col">
          <input type="date" ref={Date} />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success  addbtn"
            onClick={addBtn}
          >
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default ListName;
