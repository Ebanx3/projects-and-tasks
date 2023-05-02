import { useContext, useState } from "react";
import { Project as project } from "./types";
import AddNewProject from "./components/AddNewProject";
import ProjectLink from "./components/ProjectLink";
import { context } from "./context";

function Home() {
  const [showNewProject, setShowNewProject] = useState(false);

  const { addNewProject, projects, removeProject } = useContext(context);
  console.log({ addNewProject, projects, removeProject });
  if (showNewProject) {
    return (
      <AddNewProject
        addNewProject={addNewProject}
        setShowNewProject={setShowNewProject}
        projects={projects}
      />
    );
  }

  return (
    <>
      <div className="container">
        {projects.length === 0 ? (
          <p>No tienes proyectos aún</p>
        ) : (
          <h2 className="title">Proyectos</h2>
        )}
        {projects.map((project: project) => (
          <ProjectLink
            project={project}
            key={project.name}
            removeProject={removeProject}
          />
        ))}
        <button
          className="createProject"
          onClick={() => setShowNewProject(true)}
        >
          CREAR PROYECTO
        </button>
      </div>
    </>
  );
}

export default Home;
