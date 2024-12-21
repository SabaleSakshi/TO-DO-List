import style from "./OpeningMsg.module.css";
import { itemsContext } from "./store/todo-items-store";
import { RiStarSmileLine } from "react-icons/ri";
import { useContext } from "react";
import { PiFlowerLotusDuotone } from "react-icons/pi";


function OpeningMsg() {

  const {items}=useContext(itemsContext);

  return (items.length === 0 && <h1 className={style.Msg}><RiStarSmileLine />Have A Great Day<PiFlowerLotusDuotone /><PiFlowerLotusDuotone /></h1>);
}

export default OpeningMsg;
