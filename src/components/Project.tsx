import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Project as ProjectType } from "../types";
import { context } from "../context";
import Task from "./Task";

const Project = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState<ProjectType>();
  const { projects, addTask } = useContext(context);

  const [task, setTask] = useState("");

  const addTaskToProject = () => {
    addTask(project?.name || " ", task);
    setTask("");
  };

  useEffect(() => {
    const index = projects.findIndex(
      (elem: ProjectType) => elem.name === projectName
    );
    if (index >= 0) {
      setProject(projects[index]);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="projectName">{project?.name}</h1>
      <h3 className="projectDescription">{project?.description}</h3>

      <div className="addTask">
        <input
          type="text"
          id="taskInput"
          placeholder="Tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addTaskBtn" onClick={addTaskToProject}>
          Añadir tarea
        </button>
      </div>

      {project?.tasks.length === 0 && <span>No tienes tareas aún</span>}
      {project?.tasks.map((task: string) => (
        <Task task={task} projectName={project?.name} />
      ))}
    </div>
  );
};

export default Project;
