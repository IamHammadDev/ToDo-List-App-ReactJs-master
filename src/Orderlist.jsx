import React from "react";

const OrderList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fas fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li> {props.text} </li>
      </div>
    </>
  );
};
export default OrderList;
