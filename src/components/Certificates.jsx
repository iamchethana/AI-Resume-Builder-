import React from "react";

const Certificates = ({ certificates, setCertificates }) => {
  const addCert = () => setCertificates([...certificates, ""]);
  const updateCert = (i, val) => {
    const newCerts = [...certificates];
    newCerts[i] = val;
    setCertificates(newCerts);
  };
  const removeCert = (i) => setCertificates(certificates.filter((_, idx) => idx !== i));

  return (
    <div>
      <h3 style={{ margin: "10px 0" }}>Certificates</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {certificates.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: "2px" }}>
            <input value={c} onChange={(e) => updateCert(i, e.target.value)} placeholder="Certificate" style={{ padding: "4px" }} />
            <button onClick={() => removeCert(i)} style={{ background: "#ff4d4f", color: "#fff", border: "none", cursor: "pointer" }}>X</button>
          </div>
        ))}
        <button onClick={addCert} style={{ padding: "4px 8px", background: "#1890ff", color: "#fff", border: "none", cursor: "pointer" }}>+ Add</button>
      </div>
    </div>
  );
};

export default Certificates;