import React from "react";

const Experience = ({ experienceList, setExperienceList }) => {
  const handleChange = (index, field, value) => {
    const values = [...experienceList];
    values[index][field] = value;
    setExperienceList(values);
  };

  const addExperience = () => {
    setExperienceList([...experienceList, { company: "", role: "", year: "", summary: "" }]);
  };

  const removeExperience = (index) => {
    const values = [...experienceList];
    values.splice(index, 1);
    setExperienceList(values);
  };

  return (
    <div>
      <h2>Experience</h2>

      {experienceList.map((exp, index) => (
        <div key={index} style={{ marginBottom: "15px", border: "1px solid #ddd", padding: "10px" }}>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            style={{ width: "100%", marginBottom: "5px" }}
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleChange(index, "role", e.target.value)}
            style={{ width: "100%", marginBottom: "5px" }}
          />
          <input
            type="text"
            placeholder="Year"
            value={exp.year}
            onChange={(e) => handleChange(index, "year", e.target.value)}
            style={{ width: "100%", marginBottom: "5px" }}
          />
          <textarea
            placeholder="Summary of this role"
            value={exp.summary}
            onChange={(e) => handleChange(index, "summary", e.target.value)}
            style={{ width: "100%", marginBottom: "5px", padding: "4px" }}
          />
          <button
            onClick={() => removeExperience(index)}
            style={{ padding: "4px 8px", background: "#ff4d4f", color: "#fff", border: "none", cursor: "pointer" }}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={addExperience}
        style={{ padding: "4px 8px", background: "#1890ff", color: "#fff", border: "none", cursor: "pointer" }}
      >
        + Add Experience
      </button>
    </div>
  );
};

export default Experience;