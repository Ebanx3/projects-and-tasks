import { Project as projectType } from "../types";
import { Link } from "react-router-dom";

const ProjectLink = ({
  project,
  removeProject,
}: {
  project: projectType;
  removeProject: (arg: string) => void;
}) => {
  return (
    <div className="projectLink">
      <Link to={`/${project.name}`}>{project.name}</Link>
      <button
        className="deleteButton"
        onClick={() => removeProject(project.name)}
      >
        <span className="material-symbols-outlined deleteCan">delete</span>
      </button>
    </div>
  );
};

export default ProjectLink;
