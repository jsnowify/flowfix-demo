import { heroImage, trustItems, stats } from "../data";

export default function Hero({ handleNavClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-layer" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy-column">
          <div className="eyebrow hero-kicker">
            <span className="eyebrow-dot" aria-hidden="true" />
            Austin, TX · Licensed &amp; insured
          </div>

          <h1
            className="hero-title"
            aria-label="Reliable Plumbing Services You Can Trust"
          >
            <span className="line-wrap">
              <span className="line">Reliable Plumbing Services</span>
            </span>
            <span className="line-wrap">
              <span className="line accent">You Can Trust</span>
            </span>
          </h1>

          <p className="hero-copy">
            From leaky faucets to full pipe replacements, FlowFix has been
            serving homeowners and businesses for over 15 years.
          </p>

          <div className="hero-actions">
            <a
              className="button-primary button-glow"
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
            >
              Get a Free Quote
            </a>
            <a
              className="button-secondary"
              href="#services"
              onClick={(event) => handleNavClick(event, "services")}
            >
              View Services
            </a>
          </div>

          <div className="hero-trust-row">
            {trustItems.map((item) => (
              <span key={item} className="trust-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-stats">
            {stats.map(([value, label]) => (
              <article
                key={label}
                className="hero-stat card-surface stat-card interactive-lift"
              >
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual-grid">
          <figure className="hero-image-wrap card-surface interactive-lift">
            <img
              src={heroImage}
              alt="Plumber working on a sink installation"
              className="hero-photo"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-image-overlay" aria-hidden="true" />
            <figcaption className="hero-image-caption">
              <strong>
                Fast response. Clear communication. Quality workmanship.
              </strong>
              <span>
                Professional plumbing service with a cleaner visual hierarchy.
              </span>
            </figcaption>
          </figure>

          <div className="hero-panel card-surface interactive-lift">
            <span className="hero-panel-label">Emergency line</span>
            <strong>(512) 555-0199</strong>
            <p>
              Available 24/7 for urgent situations and emergency plumbing needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
