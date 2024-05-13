import { useState } from "react";
import Items from "./Items";

function InputItems() {
  let [ItemList, setItemList] = useState([]);
  let [InputtoDo, setInputtoDo] = useState();

  let handleItemList = (e) => {
    if (e.target.value != "") {
      let a = e.target.value;
      setInputtoDo(a);
      e.target.value = "";
    }
  };
  let handleAdd = (event) => {
    debugger;
    // console.log(event);
    let newItemList = [...ItemList, InputtoDo];
    setInputtoDo("");
    setItemList(newItemList);
    console.log(newItemList);
  };

  let handleAddon = () => {
    if (InputtoDo != "") {
      handleAdd();
    }
  };

  let handleDeleteItem = (i) => {
    setItemList((prevList) => prevList.filter((item, index) => index !== i));
  };

  return (
    <>
      <div className="input-group mb-3 divsty">
        <input
          type="text"
          className="inputbox "
          placeholder="Enter To-Do Item"
          onBlur={handleItemList}
        />
        <button
          className="text-bg-primary p-3 btn btn-outline-secondary butt"
          type="button"
          id="button-addon2"
          onClick={handleAddon}
        >
          Add
        </button>
      </div>
      <Items list1={ItemList} handleonDeleteItem={handleDeleteItem} />
    </>
  );
}

export default InputItems;
