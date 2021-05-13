import React from "react";
import "../App.css";
const Task = ({ text, id, done, tasks, setTasks }) => {
  const deleteHandler = (e) => {
    setTasks(tasks.filter((i) => i.id !== id));
  };
  const doneHandler = () => {
    setTasks(
      tasks.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div className="task">
      <li className={`todo`}>
        <h4 className={`${done ? "completed" : ""}`}>{text}</h4>
      </li>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={doneHandler}>{done ? `Not Done` : `Done`}</button>
    </div>
  );
};

export default Task;
