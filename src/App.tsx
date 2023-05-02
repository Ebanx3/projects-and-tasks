import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Project from "./components/Project";
import { Context } from "./context";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:projectName" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
