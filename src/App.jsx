import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [personalData, setPersonalData] = useState({ name:"", phone:"", email:"", linkedin:"", github:"", summary:"" });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <div style={{ flex: 1 }}>
        <PersonalInfo data={personalData} setData={setPersonalData} />
        <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
        <Skills skills={skills} setSkills={setSkills} />
        <Projects projects={projects} setProjects={setProjects} />
        <Certificates certificates={certificates} setCertificates={setCertificates} />
        <Education educationList={educationList} setEducationList={setEducationList} />
      </div>
      <div style={{ flex: 1 }}>
        <ResumePreview
          data={personalData}
          skills={skills}
          projects={projects}
          certificates={certificates}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </div>
  );
}

export default App;