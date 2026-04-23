export default function Contact({
  formData,
  handleInputChange,
  handleSubmit,
  handleNavClick,
}) {
  return (
    <section id="contact" className="section-space contact-section">
      <div className="container contact-layout">
        <article className="contact-card card-surface interactive-lift">
          <div style={{ marginBottom: "28px" }}>
            <img
              src="/logo-ff.png"
              alt="FlowFix Plumbing Logo"
              className="brand-logo-img"
              style={{ height: "42px", width: "auto" }}
            />
          </div>

          <p className="eyebrow">Contacts</p>
          <h2 className="section-title compact">
            Get in touch with FlowFix Plumbing
          </h2>

          <div className="contact-quick-actions">
            <a href="tel:+15125550199">Call now</a>
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
            >
              Get quote
            </a>
          </div>

          <div className="contact-list">
            <div>
              <span>Phone</span>
              <a href="tel:+15125550199">(512) 555-0199</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:info@flowfixplumbing.com">
                info@flowfixplumbing.com
              </a>
            </div>
            <div>
              <span>Address</span>
              <p>742 Pipe Lane, Austin, TX 78701</p>
            </div>
            <div>
              <span>Hours</span>
              <p>Mon–Sat 7AM–7PM | Emergency: 24/7</p>
            </div>
          </div>
        </article>

        <article className="contact-card card-surface interactive-lift">
          <h3>Request a quote</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="john@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your plumbing issue..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </label>
            <button
              className="button-primary full-width button-glow"
              type="submit"
            >
              Send message
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
