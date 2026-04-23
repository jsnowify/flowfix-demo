export const siteUrl = "https://flowfixplumbing.com";
export const siteTitle =
  "FlowFix Plumbing | Reliable Plumbing Services You Can Trust";
export const siteDescription =
  "FlowFix Plumbing provides leak repair, bathroom plumbing, water heater service, pipe replacement, drain cleaning, and 24/7 emergency plumbing in Austin, Texas.";
export const siteImage = `${siteUrl}/og-image.jpg`;

export const heroImage =
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80";
export const aboutImage =
  "https://images.squarespace-cdn.com/content/v1/605c319c62400f7e6490c5ed/1635112949317-2G7RGGICU013VRUXK7CV/Elm-Grove-family-photos-Stories-Framed.jpg";

export const services = [
  {
    name: "Leak Repair",
    desc: "Fast detection and repair of leaks in pipes, faucets, and fixtures.",
    short: "Leaks fixed quickly before they become bigger damage.",
  },
  {
    name: "Bathroom Plumbing",
    desc: "Installation and repair of showers, bathtubs, toilets, and sinks.",
    short: "Clean bathroom plumbing work for repairs or upgrades.",
  },
  {
    name: "Water Heater",
    desc: "Repair, maintenance, and replacement of all water heater types.",
    short: "Hot water restored with repair or replacement.",
  },
  {
    name: "Pipe Replacement",
    desc: "Full and partial pipe replacement for aging or damaged systems.",
    short: "Long-term pipe upgrades for older systems.",
  },
  {
    name: "Drain Cleaning",
    desc: "Professional unclogging and cleaning for all drain types.",
    short: "Clear drains with professional tools and less mess.",
  },
  {
    name: "Emergency Service",
    desc: "24/7 emergency plumbing available for urgent situations.",
    short: "Immediate response for urgent plumbing issues.",
  },
];

export const reviews = [
  {
    text: "They fixed our burst pipe in under an hour. Incredible response time and very professional.",
    name: "Sarah M.",
  },
  {
    text: "Fair pricing and great work. FlowFix installed our new water heater with no issues at all.",
    name: "James R.",
  },
  {
    text: "I've used them three times now. Always on time, always clean up after themselves.",
    name: "Linda K.",
  },
  {
    text: "Called them for an emergency on a Sunday night. They showed up within 30 minutes.",
    name: "David T.",
  },
];

export const trustItems = [
  "15+ years experience",
  "Licensed & insured",
  "24/7 emergency service",
];

export const stats = [
  ["15+", "Years serving Austin"],
  ["2.4K+", "Jobs completed"],
  ["4.9★", "Average rating"],
  ["24/7", "Emergency availability"],
];

export const serviceIcons = {
  "Leak Repair": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 4 C14 4 6 14 6 18 A8 8 0 0 0 22 18 C22 14 14 4 14 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10 19 A4 4 0 0 0 18 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Bathroom Plumbing": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="16"
        width="20"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 16V8Q8 4 12 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 20L9 24M18 20L19 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Water Heater": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="4"
        width="12"
        height="18"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M11 13 Q14 10 17 13 Q14 16 11 13Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M14 2V4M14 22V24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Pipe Replacement": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10 H12 Q16 10 16 14 Q16 18 20 18 H24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4 8 H12 Q18 8 18 14 Q18 20 22 20 H24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Drain Cleaning": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14 6V11M14 17V22M6 14H11M17 14H22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Emergency Service": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path d="M14 4 L26 24 H2 Z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14 12V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="21" r="1" fill="currentColor" />
    </svg>
  ),
};
