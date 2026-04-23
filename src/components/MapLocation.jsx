export default function MapLocation() {
  return (
    <section id="location" className="section-space map-section">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow center">Location</p>
          <h2 className="section-title center">
            Serving the greater <span>Austin area</span>
          </h2>
        </div>

        <div className="map-container card-surface interactive-lift">
          <iframe
            title="FlowFix Plumbing Service Area"
            src="https://maps.google.com/maps?q=Austin,%20TX%2078701&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-interaction-guard" />
        </div>
      </div>
    </section>
  );
}
