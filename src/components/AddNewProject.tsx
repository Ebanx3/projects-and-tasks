import { useState } from "react";
import { Project } from "../types";

const AddNewProject = ({
  addNewProject,
  setShowNewProject,
  projects,
}: {
  addNewProject: (name: Project) => void;
  setShowNewProject: (value: boolean) => void;
  projects: Project[];
}) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [alert, setAlert] = useState("");

  const showAlertFor3Seconds = (info: string) => {
    setAlert(info);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const checkInput = () => {
    if (projectName === "") {
      showAlertFor3Seconds("El nombre del proyecto no puede estar vacío");
      return false;
    }
    const index = projects.findIndex((pj: Project) => pj.name === projectName);
    if (index >= 0) {
      showAlertFor3Seconds("Ya existe un proyecto con ese nombre");
      return false;
    }
    return true;
  };

  const handleConfirm = () => {
    if (checkInput()) {
      addNewProject({
        name: projectName,
        description: projectDescription,
        tasks: [],
      });
      setShowNewProject(false);
    }
  };

  return (
    <>
      <div className="containerForm">
        <label htmlFor="projectname">Nombre del proyecto:</label>
        <input
          type="text"
          id="projectname"
          autoComplete="off"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
        <label htmlFor="projectDescription">Descripción del proyecto:</label>
        <textarea
          id="projectDescription"
          cols={30}
          rows={10}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        ></textarea>
        <div className="alertContainer">
          {alert != "" && <p className="alert">{alert}</p>}
        </div>
        <button onClick={handleConfirm} className="createProject">
          Confirmar
        </button>
        <button className="closeBtn" onClick={() => setShowNewProject(false)}>
          Cancelar
        </button>
      </div>
    </>
  );
};

export default AddNewProject;
