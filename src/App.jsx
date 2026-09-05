import { useState } from "react";

import "./styles/App.css";

import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CV from "./components/CV";

function createExperience() {
  return {
    id: crypto.randomUUID(),
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  };
}

function App() {
  // ==========================================
  // GENERAL INFORMATION
  // ==========================================

  const [generalInfoForm, setGeneralInfoForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ==========================================
  // EDUCATION
  // ==========================================

  const [educationForm, setEducationForm] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [isEditingEducation, setIsEditingEducation] = useState(false);

  // ==========================================
  // EXPERIENCE
  // ==========================================

  const [experienceForm, setExperienceForm] = useState(createExperience());

  const [experience, setExperience] = useState([]);

  const [editingExperienceId, setEditingExperienceId] = useState(null);

  const [showExperienceForm, setShowExperienceForm] = useState(true);

  // ==========================================
  // GENERAL INFORMATION HANDLERS
  // ==========================================

  function handleGeneralInfoChange(field, value) {
    setGeneralInfoForm({
      ...generalInfoForm,
      [field]: value,
    });
  }

  function handleGeneralInfoSubmit() {
    setGeneralInfo({
      ...generalInfoForm,
    });
  }

  // ==========================================
  // EDUCATION HANDLERS
  // ==========================================

  function handleEducationChange(field, value) {
    setEducationForm({
      ...educationForm,
      [field]: value,
    });
  }

  function handleEducationSubmit() {
    setEducation({
      ...educationForm,
    });

    setIsEditingEducation(false);
  }

  function handleEducationEdit() {
    setEducationForm({
      ...education,
    });

    setIsEditingEducation(true);
  }

  // ==========================================
  // EXPERIENCE HANDLERS
  // ==========================================

  function handleExperienceChange(field, value) {
    setExperienceForm({
      ...experienceForm,
      [field]: value,
    });
  }

  function handleExperienceSubmit() {
    setExperience([...experience, experienceForm]);

    setExperienceForm(createExperience());

    setEditingExperienceId(null);

    setShowExperienceForm(false);
  }

  function handleAddExperience() {
    setExperienceForm(createExperience());

    setEditingExperienceId(null);

    setShowExperienceForm(true);
  }

  function handleExperienceEdit(id) {
    const item = experience.find((item) => item.id === id);

    if (!item) {
      return;
    }

    setExperienceForm({
      ...item,
    });

    setEditingExperienceId(id);

    setShowExperienceForm(true);
  }

  function handleExperienceUpdate() {
    setExperience(
      experience.map((item) =>
        item.id === editingExperienceId ? experienceForm : item,
      ),
    );

    setExperienceForm(createExperience());

    setEditingExperienceId(null);

    setShowExperienceForm(false);
  }

  function handleExperienceDelete(id) {
    setExperience(experience.filter((item) => item.id !== id));

    if (editingExperienceId === id) {
      setExperienceForm(createExperience());

      setEditingExperienceId(null);

      setShowExperienceForm(false);
    }
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="app">
      <header className="app-header">
        <h1>CV Application</h1>

        <p>Create your professional CV</p>
      </header>

      <main className="app-layout">
        <div className="form-panel">
          <GeneralInformation
            formData={generalInfoForm}
            onChange={handleGeneralInfoChange}
            onSubmit={handleGeneralInfoSubmit}
          />

          <Education
            formData={educationForm}
            submittedData={education}
            onChange={handleEducationChange}
            onSubmit={handleEducationSubmit}
            onEdit={handleEducationEdit}
            isEditing={isEditingEducation}
          />

          <Experience
            formData={experienceForm}
            onChange={handleExperienceChange}
            onSubmit={handleExperienceSubmit}
            onUpdate={handleExperienceUpdate}
            onAdd={handleAddExperience}
            isEditing={editingExperienceId !== null}
            showForm={showExperienceForm}
            hasExperience={experience.length > 0}
          />
        </div>

        <CV
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          onExperienceEdit={handleExperienceEdit}
          onExperienceDelete={handleExperienceDelete}
        />
      </main>
    </div>
  );
}

export default App;
