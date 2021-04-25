import React from "react";
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "35vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      <hr className="w-25 mx-auto" />
      {props.todo.length === 0
        ? "No Todos to Display"
        : props.todo.map((todo) => {
            return (
              <Todoitem todo={todo} key={todo.srno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
