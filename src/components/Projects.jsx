import React from "react";

const Projects = ({ projects, setProjects }) => {
  const addProject = () => setProjects([...projects, { title: "", points: [""] }]);
  const updateProjectTitle = (i, val) => {
    const newProjects = [...projects];
    newProjects[i].title = val;
    setProjects(newProjects);
  };
  const updatePoint = (pIndex, ptIndex, val) => {
    const newProjects = [...projects];
    newProjects[pIndex].points[ptIndex] = val;
    setProjects(newProjects);
  };
  const addPoint = (pIndex) => {
    const newProjects = [...projects];
    newProjects[pIndex].points.push("");
    setProjects(newProjects);
  };
  const removePoint = (pIndex, ptIndex) => {
    const newProjects = [...projects];
    newProjects[pIndex].points.splice(ptIndex, 1);
    setProjects(newProjects);
  };
  const removeProject = (i) => setProjects(projects.filter((_, idx) => idx !== i));

  return (
    <div>
      <h3 style={{ margin: "10px 0" }}>Projects</h3>
      {projects.map((p, i) => (
        <div key={i} style={{ border: "1px solid #ddd", padding: "5px", marginBottom: "5px" }}>
          <input
            placeholder="Project Title"
            value={p.title}
            onChange={(e) => updateProjectTitle(i, e.target.value)}
            style={{ width: "100%", padding: "4px", marginBottom: "3px" }}
          />
          {p.points.map((pt, j) => (
            <div key={j} style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
              <input
                placeholder={`Point ${j + 1}`}
                value={pt}
                onChange={(e) => updatePoint(i, j, e.target.value)}
                style={{ flex: 1, padding: "4px" }}
              />
              <button onClick={() => removePoint(i, j)} style={{ background: "#ff4d4f", color: "#fff", border: "none", cursor: "pointer" }}>X</button>
            </div>
          ))}
          <div style={{ display: "flex", gap: "2px" }}>
            <button onClick={() => addPoint(i)} style={{ padding: "3px 6px", background: "#1890ff", color: "#fff", border: "none", cursor: "pointer" }}>+ Point</button>
            <button onClick={() => removeProject(i)} style={{ padding: "3px 6px", background: "#ff4d4f", color: "#fff", border: "none", cursor: "pointer" }}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={addProject} style={{ padding: "4px 8px", background: "#1890ff", color: "#fff", border: "none", cursor: "pointer" }}>+ Add Project</button>
    </div>
  );
};

export default Projects;