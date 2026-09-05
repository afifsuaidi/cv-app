function CV({
  generalInfo,
  education,
  experience,
  onExperienceEdit,
  onExperienceDelete,
}) {
  return (
    <section className="cv">
      {/* =========================
                HEADER
            ========================= */}

      <header className="cv-header">
        <h1>{generalInfo.name || "Your Name"}</h1>

        <div className="contact-info">
          {generalInfo.email && <span>{generalInfo.email}</span>}

          {generalInfo.phone && <span>{generalInfo.phone}</span>}
        </div>
      </header>

      {/* =========================
                EDUCATION
            ========================= */}

      {(education.school || education.title || education.date) && (
        <section className="cv-section">
          <h2>Education</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <div>
                <h3>{education.school}</h3>

                <p>{education.title}</p>
              </div>

              <span className="cv-date">{education.date}</span>
            </div>
          </div>
        </section>
      )}

      {/* =========================
                EXPERIENCE
            ========================= */}

      {experience.length > 0 && (
        <section className="cv-section">
          <h2>Experience</h2>

          {experience.map((item) => (
            <div className="cv-item" key={item.id}>
              <div className="cv-item-header">
                <div>
                  <h3>{item.position}</h3>

                  <p>
                    <strong>{item.company}</strong>
                  </p>
                </div>

                <span className="cv-date">
                  {item.from}

                  {item.from && item.until && " - "}

                  {item.until}
                </span>
              </div>

              <p className="responsibilities">{item.responsibilities}</p>

              <div className="cv-actions">
                <button type="button" onClick={() => onExperienceEdit(item.id)}>
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => onExperienceDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}

export default CV;
