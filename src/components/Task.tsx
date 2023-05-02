import { useState, useContext } from "react";
import { context } from "../context";

const Task = ({ task, projectName }: { task: string; projectName: string }) => {
  const [completed, setCompleted] = useState(false);

  const { removeTask } = useContext(context);

  const handleClick = () => {
    completed ? setCompleted(false) : setCompleted(true);
  };

  const handleDelete = () => {
    removeTask(projectName, task);
  };

  return (
    <div className="taskContainer">
      <span
        className={completed ? "task completed" : "task"}
        onClick={handleClick}
      >
        - {task}
      </span>
      <button className="deleteButton" onClick={handleDelete}>
        <span className="material-symbols-outlined deleteCan">delete</span>
      </button>
    </div>
  );
};

export default Task;
