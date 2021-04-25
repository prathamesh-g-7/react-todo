/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import img from "./pic.png";
import sampleTodo from "./sampleTodo.png";

export const About = () => {
  let style = {
    width: "18 rem",
  };
  let imgStyle = {
    width: "20vw",
    margin: "auto",
  };

  return (
    <div className="text-white ">
      <div className="card  bg-secondary" style={style}>
        <img
          className="card-img-top my-3"
          src={img}
          style={imgStyle}
          alt="Card image cap"
        />
        <div className="card-body mx-auto">
          <p className="card-text w-50 mx-auto">
            This is a Todo App which will help you to sort your daily tasks and
            make your day smooth. You can add your tasks by writing title and a
            litle bit description about it. You can also delete your tasks or
            mark it check when it complete.
          </p>
        </div>
      </div>
      <div className="card  bg-secondary" style={style}>
        <img
          className="card-img-top my-3"
          src={sampleTodo}
          style={imgStyle}
          alt="Card image cap"
        />
        <div className="card-body mx-auto">
          <p className="card-text w-50 mx-auto">
            This is view of sample todo.You can check and delete it according to
            your need.
          </p>
        </div>
      </div>
    </div>
  );
};
