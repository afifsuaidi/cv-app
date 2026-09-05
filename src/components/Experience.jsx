function Experience({
  formData,
  onChange,
  onSubmit,
  onUpdate,
  onAdd,
  isEditing,
  showForm,
  hasExperience,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    if (isEditing) {
      onUpdate();
    } else {
      onSubmit();
    }
  }

  return (
    <section className="form-section">
      <h2>Practical Experience</h2>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company">Company</label>

            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(event) => onChange("company", event.target.value)}
              placeholder="Company name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>

            <input
              type="text"
              id="position"
              value={formData.position}
              onChange={(event) => onChange("position", event.target.value)}
              placeholder="Web Developer"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="responsibilities">Main Responsibilities</label>

            <textarea
              id="responsibilities"
              value={formData.responsibilities}
              onChange={(event) =>
                onChange("responsibilities", event.target.value)
              }
              placeholder="Describe your responsibilities..."
              rows="4"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from">From</label>

              <input
                type="text"
                id="from"
                value={formData.from}
                onChange={(event) => onChange("from", event.target.value)}
                placeholder="2020"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="until">Until</label>

              <input
                type="text"
                id="until"
                value={formData.until}
                onChange={(event) => onChange("until", event.target.value)}
                placeholder="2024"
              />
            </div>
          </div>

          <button type="submit">
            {isEditing ? "Update Experience" : "Add Experience"}
          </button>
        </form>
      )}

      {hasExperience && !showForm && (
        <button
          type="button"
          className="secondary-button full-width"
          onClick={onAdd}
        >
          + Add Another Experience
        </button>
      )}
    </section>
  );
}

export default Experience;
