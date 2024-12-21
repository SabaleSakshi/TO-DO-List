import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { itemsContext } from "./store/todo-items-store";
import Name from "./Name";
import OpeningMsg from "./OpeningMsg";

function TodoItem({ todoDate, todoName, index }) {
  const { handleDeleteBtn } = useContext(itemsContext);
  // console.log(todoName, index);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">{todoName}</div>
          <div className="col"> {todoDate}</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger delbtn"
              onClick={() => handleDeleteBtn(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
