import React from "react";

export const Todoitem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="text-center">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>

        <span className="text-warning">Title: </span>
        <h4>{todo.title}</h4>
        <span className="text-warning"> Description: </span>
        <p className="fs-6">{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
