import * as React from "react";
import "./Todolist.css";

const todolist = (props: {
  id: string;
  task: string;
  remove: (id: string) => void;
}) => {
  console.log(props);
  const onClick = () => {
    props.remove(props.id);
  };
  return (
    <div className="task">
      <div>{props.task}</div>
      <button onClick={onClick}>
        <i id={props.id} className="fas fa-trash" />
      </button>
    </div>
  );
};

export default todolist;
