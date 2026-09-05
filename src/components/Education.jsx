function Education({
  formData,
  submittedData,
  onChange,
  onSubmit,
  onEdit,
  isEditing,
}) {
  const hasEducation =
    submittedData.school || submittedData.title || submittedData.date;

  if (!isEditing && hasEducation) {
    return (
      <section className="form-section">
        <div className="section-heading">
          <h2>Education</h2>

          <button type="button" className="secondary-button" onClick={onEdit}>
            Edit
          </button>
        </div>

        <div className="saved-data">
          <strong>{submittedData.school}</strong>

          <span>{submittedData.title}</span>

          <span>{submittedData.date}</span>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section">
      <h2>Education</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <div className="form-group">
          <label htmlFor="school">School</label>

          <input
            type="text"
            id="school"
            value={formData.school}
            onChange={(event) => onChange("school", event.target.value)}
            placeholder="University of Indonesia"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Degree / Title</label>

          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(event) => onChange("title", event.target.value)}
            placeholder="Bachelor of Computer Science"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>

          <input
            type="text"
            id="date"
            value={formData.date}
            onChange={(event) => onChange("date", event.target.value)}
            placeholder="2015 - 2019"
            required
          />
        </div>

        <button type="submit">
          {isEditing ? "Update Education" : "Save Education"}
        </button>
      </form>
    </section>
  );
}

export default Education;
