import * as React from "react";
import Todolist from "../Todolist/Todolist";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

type task = {
  id: string;
  task: string;
};

type state = task[];

const TodoForm = (props: { store: any }) => {
  const [inputText, setInputText] = React.useState("");
  const handleSubmit = () => {
    inputText.length && props.store.addTodo(inputText);
    setInputText("");
  };

  const handleChange = (evt: any) => {
    if (evt.key === "Enter") {
      handleSubmit();
    } else {
      setInputText(evt.target?.value);
    }
  };

  const onRemove = (id: string) => {
    props.store.remove(id);
  };

  return (
    <div className="root-cont">
      <div>
        <h2>Todo List example</h2>
        <h3>by Mobx</h3>
        <div>
          <input type="text" value={inputText} onChange={handleChange} />
          <button onClick={handleSubmit}>Add</button>
        </div>
        <div>
          {props.store.listItems.map((item) => (
            <Todolist {...item} remove={onRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
