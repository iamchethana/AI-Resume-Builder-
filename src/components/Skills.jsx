import React from "react";

const Skills = ({ skills, setSkills }) => {
  const addSkill = () => setSkills([...skills, ""]);
  const updateSkill = (i, val) => {
    const newSkills = [...skills];
    newSkills[i] = val;
    setSkills(newSkills);
  };

  const removeSkill = (i) => setSkills(skills.filter((_, idx) => idx !== i));

  return (
    <div>
      <h3 style={{ margin: "10px 0" }}>Skills</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {skills.map((skill, i) => (
          <div key={i} style={{ display: "flex", gap: "2px" }}>
            <input
              value={skill}
              onChange={(e) => updateSkill(i, e.target.value)}
              placeholder="Skill"
              style={{ padding: "4px" }}
            />
            <button onClick={() => removeSkill(i)} style={{ background: "#ff4d4f", color: "#fff", border: "none", cursor: "pointer" }}>
              X
            </button>
          </div>
        ))}
        <button onClick={addSkill} style={{ padding: "4px 8px", background: "#1890ff", color: "#fff", border: "none", cursor: "pointer" }}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default Skills;