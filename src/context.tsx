import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { Project } from "./types";

interface IContextValue {
  projects: Project[];
  addNewProject: (project: Project) => void;
  removeProject: (name: string) => void;
  addTask: (projectName: string, task: string) => void;
  removeTask: (projectName: string, task: string) => void;
}
export const context = createContext({} as IContextValue);
const Provider = context.Provider;

export const Context = ({ children }: PropsWithChildren) => {
  const [projects, setProjects] = useState<Project[]>(
    JSON.parse(localStorage.getItem("projects") || "[]")
  );

  const addNewProject = (project: Project) => {
    const newArray: Project[] = [...projects, project];
    setProjects(newArray);
  };

  const removeProject = (name: string) => {
    setProjects(projects.filter((pj: Project) => pj.name !== name));
  };

  const addTask = (projectName: string, task: string) => {
    const index = projects.findIndex((pj: Project) => pj.name === projectName);
    if (index < 0) return;
    const newArray = [...projects];
    newArray[index].tasks.push(task);
    setProjects(newArray);
  };

  const removeTask = (projectName: string, task: string) => {
    console.log("project name", projectName);
    console.log("task", task);
    const index = projects.findIndex((pj: Project) => pj.name === projectName);
    if (index < 0) return;
    console.log(index);
    const newArray = [...projects];
    console.log(newArray);

    const ind = newArray[index].tasks.findIndex((tsk: string) => tsk === task);

    if (ind < 0) return;

    newArray[index].tasks.splice(ind, 1);
    console.log(newArray);

    setProjects(newArray);
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const contextValue = {
    projects,
    addNewProject,
    removeProject,
    addTask,
    removeTask,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};
