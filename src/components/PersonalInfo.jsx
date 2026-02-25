import React from "react";

const PersonalInfo = ({ data, setData }) => {
  return (
    <div>
      {/* Name input styled as centered heading */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          style={{
            textTransform: "uppercase",
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            border: "none",
            borderBottom: "2px solid #000",
            outline: "none",
            width: "80%",
            background: "transparent",
          }}
        />
      </div>

      {/* Contact Inputs */}
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "10px",
        }}
      >
        <input
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          style={{ flex: "1 1 120px", padding: "4px" }}
        />
        <input
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ flex: "1 1 180px", padding: "4px" }}
        />
        <input
          placeholder="LinkedIn URL"
          value={data.linkedin}
          onChange={(e) => setData({ ...data, linkedin: e.target.value })}
          style={{ flex: "1 1 180px", padding: "4px" }}
        />
        <input
          placeholder="GitHub URL"
          value={data.github}
          onChange={(e) => setData({ ...data, github: e.target.value })}
          style={{ flex: "1 1 180px", padding: "4px" }}
        />
      </div>

      {/* Professional Summary */}
      <textarea
        placeholder="Professional Summary"
        value={data.summary}
        onChange={(e) => setData({ ...data, summary: e.target.value })}
        style={{ width: "100%", padding: "4px", marginBottom: "10px" }}
      />
    </div>
  );
};

export default PersonalInfo;