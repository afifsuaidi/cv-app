function GeneralInformation({ formData, onChange, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <section className="form-section">
      <h2>General Information</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>

          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(event) => onChange("name", event.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>

          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            placeholder="+62 812 3456 7890"
            required
          />
        </div>

        <button type="submit">Save Information</button>
      </form>
    </section>
  );
}

export default GeneralInformation;
