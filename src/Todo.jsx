import  { useState } from "react";
import OrderList from "./OrderList";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = (e) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
            return index!==id;
        })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}

            {items.map((itemvalue, index) => {
              return (
                <OrderList
                  text={itemvalue}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todo;
