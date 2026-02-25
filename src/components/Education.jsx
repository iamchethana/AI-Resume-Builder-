import React from "react";

const Education = ({ educationList, setEducationList }) => {
  // Add a new education entry
  const addEducation = () =>
    setEducationList([...educationList, { school: "", degree: "", year: "" }]);

  // Update a specific field for a specific education entry
  const updateEducation = (index, field, value) => {
    const newList = [...educationList];
    newList[index][field] = value;
    setEducationList(newList);
  };

  // Remove a specific education entry
  const removeEducation = (index) =>
    setEducationList(educationList.filter((_, i) => i !== index));

  return (
    <div>
      <h3 style={{ margin: "10px 0" }}>Education</h3>
      {educationList.map((edu, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "5px",
            flexWrap: "wrap",
          }}
        >
          <input
            placeholder="School"
            value={edu.school}
            onChange={(e) => updateEducation(i, "school", e.target.value)}
            style={{ flex: "2 1 120px", padding: "4px" }}
          />
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEducation(i, "degree", e.target.value)}
            style={{ flex: "2 1 120px", padding: "4px" }}
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={(e) => updateEducation(i, "year", e.target.value)}
            style={{ flex: "1 1 60px", padding: "4px" }}
          />
          <button
            onClick={() => removeEducation(i)}
            style={{
              padding: "4px 8px",
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        style={{
          padding: "4px 8px",
          background: "#1890ff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginTop: "5px",
        }}
      >
        + Add Education
      </button>
    </div>
  );
};

export default Education;