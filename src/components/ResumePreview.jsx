import React from "react";
import html2pdf from "html2pdf.js";

const ResumePreview = ({ data, skills, projects, certificates, educationList, experienceList }) => {

  const downloadPDF = () => {
    const element = document.querySelector(".a4-page");
    html2pdf().from(element).save(`${data.name || "resume"}.pdf`);
  };

  return (
    <div>
      <button
        onClick={downloadPDF}
        style={{ margin: "5px 0", padding: "4px 8px", cursor: "pointer" }}
      >
        Download PDF
      </button>

      <div
        className="a4-page"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "10mm",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif"
        }}
      >
        {/* Name */}
        <h1 style={{ textAlign: "center", textTransform: "uppercase", margin: "5px 0" }}>
          {data.name || "Your Name"}
        </h1>

        {/* Contact */}
        <p style={{ textAlign: "center", fontSize: "12px", margin: "2px 0" }}>
          {data.phone} {data.phone && data.email && " | "} {data.email} {data.email && data.linkedin && " | "} {data.linkedin} {data.linkedin && data.github && " | "} {data.github}
        </p>

        {/* 1. Summary */}
        {data.summary && (
          <div style={{ marginTop: "10px" }}>
            <h3 style={{ margin: "5px 0", borderBottom: "2px solid blue" }}>Summary</h3>
            <p style={{ margin: "2px 0", fontSize: "12px" }}>{data.summary}</p>
          </div>
        )}

        {/* 2. Experience */}
{experienceList.length > 0 && (
  <div style={{ marginTop: "10px" }}>
    <h3 style={{ margin: "5px 0", borderBottom: "2px solid blue" }}>Experience</h3>
    {experienceList.map((e, i) => (
      <div key={i} style={{ marginBottom: "5px" }}>
        <p style={{ margin: "2px 0", fontSize: "12px" }}>
          {e.company} {e.role && `- ${e.role}`} {e.year && `(${e.year})`}
        </p>
        {e.summary && (
          <p style={{ margin: "2px 0 5px 10px", fontSize: "12px" }}>
            {e.summary}
          </p>
        )}
      </div>
    ))}
  </div>
)}

        {/* 3. Skills */}
        {skills.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h3 style={{ margin: "5px 0", borderBottom: "2px solid blue" }}>Skills</h3>
            <ul style={{ margin: "2px 0", paddingLeft: "15px", fontSize: "12px" }}>
              {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}

        {/* 4. Projects */}
        {projects.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h3 style={{ margin: "5px 0", borderBottom: "2px solid blue" }}>Projects</h3>
            {projects.map((p, i) => (
              <div key={i} style={{ marginBottom: "5px" }}>
                <strong>{p.title}</strong>
                <ul style={{ paddingLeft: "15px", fontSize: "12px" }}>
                  {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* 5. Certificates */}
        {certificates.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h3 style={{ margin: "5px 0", borderBottom: "2px solid blue" }}>Certificates</h3>
            <ul style={{ paddingLeft: "15px", fontSize: "12px" }}>
              {certificates.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}

        {/* 6. Education */}
        {educationList.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h3 style={{ margin: "5px 0", borderBottom: "2px solid blue" }}>Education</h3>
            {educationList.map((edu, i) => (
              <p key={i} style={{ margin: "2px 0", fontSize: "12px" }}>
                {edu.school} {edu.degree && `- ${edu.degree}`} {edu.year && `(${edu.year})`}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;