export default function Navbar({
  navRef,
  menuOpen,
  setMenuOpen,
  activeSection,
  handleNavClick,
}) {
  return (
    <header className="site-header">
      <nav className="nav-shell" ref={navRef} aria-label="Primary navigation">
        <div className="nav-inner">
          <a
            className="nav-brand nav-reveal"
            href="#home"
            aria-label="FlowFix Plumbing home"
            onClick={(event) => handleNavClick(event, "home")}
          >
            <img
              src="/logo-ff.png"
              alt="FlowFix Plumbing Logo"
              className="brand-logo-img"
            />
          </a>

          <button
            className="mobile-toggle nav-reveal"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links-wrap ${menuOpen ? "is-open" : ""}`}>
            <ul className="nav-links">
              {[
                ["home", "Home"],
                ["services", "Services"],
                ["about", "About"],
                ["reviews", "Reviews"],
                ["location", "Location"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    className="nav-link nav-reveal"
                    href={`#${id}`}
                    aria-current={activeSection === id ? "page" : undefined}
                    onClick={(event) => handleNavClick(event, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a className="nav-phone nav-reveal" href="tel:+15125550199">
              <span className="nav-phone-label">24/7</span>
              <span>(512) 555-0199</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
