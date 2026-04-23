import { aboutImage } from "../data";

export default function About() {
  return (
    <section id="about" className="section-space about-section">
      <div className="container about-layout">
        <div className="about-media">
          <div className="about-image-shell card-surface interactive-lift">
            <img
              src={aboutImage}
              alt="Clean modern residential plumbing interior"
              className="about-photo"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="about-copy-column">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              Family-owned and trusted in <span>Austin since 2010</span>
            </h2>
            <p className="section-copy wide">
              Founded in 2010, FlowFix Plumbing is a family-owned business based
              in Austin, TX. Our team of licensed plumbers is committed to
              honest pricing, quality workmanship, and customer satisfaction. We
              handle residential and commercial jobs of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
