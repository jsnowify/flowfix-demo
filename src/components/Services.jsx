import { services, serviceIcons } from "../data";

export default function Services({
  railRef,
  trackRef,
  activeService,
  setActiveService,
  handleNavClick,
}) {
  const currentService = services[activeService];

  return (
    <section id="services" className="services-section">
      <div className="services-intro container section-head">
        <div>
          <p className="eyebrow">Services</p>
          <h2 className="section-title">
            Professional plumbing services with{" "}
            <span>clear hierarchy and stronger interaction</span>
          </h2>
        </div>
        <div className="section-side-copy">
          <p className="section-copy">
            The horizontal rail is now cleaner and lighter, with fewer moving
            parts and better balance between desktop and mobile behavior.
          </p>
          <span className="services-helper">Scroll or hover to explore →</span>
        </div>
      </div>

      <div className="container services-shell">
        <aside className="services-spotlight card-surface interactive-lift">
          <div className="services-spotlight-top">
            <span className="services-spotlight-label">Active service</span>
            <span className="services-spotlight-count">
              0{activeService + 1}
            </span>
          </div>
          <span className="services-spotlight-icon">
            {serviceIcons[currentService.name]}
          </span>
          <h3>{currentService.name}</h3>
          <p>{currentService.desc}</p>

          <div className="services-pills" aria-label="Service selection">
            {services.map((service, index) => (
              <button
                key={service.name}
                type="button"
                className={`services-pill ${index === activeService ? "is-active" : ""}`}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                {service.name}
              </button>
            ))}
          </div>

          <a
            className="button-primary full-width button-glow"
            href="#contact"
            onClick={(event) => handleNavClick(event, "contact")}
          >
            Book this service
          </a>
        </aside>

        <div className="services-rail" ref={railRef} data-native-scroll>
          <div className="services-track" ref={trackRef}>
            {services.map((service, index) => (
              <article
                key={service.name}
                className={`service-card ${index === activeService ? "is-active" : ""}`}
                tabIndex={0}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                <div className="service-index">0{index + 1}</div>
                <div className="service-icon-row">
                  <span className="service-icon">
                    {serviceIcons[service.name]}
                  </span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <div className="service-card-footer">
                  <span>{service.short}</span>
                  <span className="service-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
