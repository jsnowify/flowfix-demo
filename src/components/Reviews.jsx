import { reviews } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="section-space reviews-section">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow center">Reviews</p>
          <h2 className="section-title center">
            Trusted by homeowners and businesses who{" "}
            <span>needed reliable service fast</span>
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="review-card card-surface interactive-lift"
            >
              <div className="review-quote-mark">“</div>

              {/* NEW: 5 Rotating Stars */}
              <div className="review-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="review-star"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              <blockquote>{review.text}</blockquote>
              <cite>— {review.name}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
