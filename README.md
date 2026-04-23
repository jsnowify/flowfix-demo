# FlowFix Plumbing - Redesign Assessment

**Candidate:** Joshua L. Cambronero  
**Role:** Frontend Web Designer (AI-Assisted)  
**Company:** Regen Digital Solutions

## Deliverables

- **Live Demo:** [FlowFix](https://flowfix-demo.vercel.app/)

## Overview

This project is a complete redesign and rebuild of the **FlowFix Plumbing** single-page website, developed as part of the **Web Designer Assessment** for **Regen Digital Solutions**.

The goal was to elevate the user experience, modernize the visual hierarchy, and deliver a polished, production-ready interface while retaining all original copy and content.

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS / Custom CSS implementation
- **Animations:** GSAP (GreenSock) for high-end scroll and load interactions
- **Icons/Assets:** Custom SVG implementations

## Design Decisions & Improvements

### Premium Visual Identity

Transitioned the brand to a modern, dark-themed interface with a vibrant blue (`#1A73E8`) accent color to establish trust, cleanliness, and a high-end feel.

### Enhanced Hierarchy & Readability

Restructured the services and features into clean, interactive **Bento-style** card layouts rather than standard text blocks, making it easier for users to scan.

### Advanced Interactivity

Implemented a custom interactive cursor, a dynamic custom pipe-themed scrollbar, and rotating star micro-interactions to create a highly engaging, tactile user experience.

### Smooth Loading Experience

Built a custom full-screen preloader that guarantees all assets, including fonts and images, are fully loaded before seamlessly transitioning into the hero section, eliminating the **flash of unstyled content (FOUC)**.

### Strategic CTA Placement

Positioned persistent, high-contrast **"Get a Free Quote"** and **"Call Now"** buttons throughout the user journey, culminating in a robust, multi-layout contact section featuring an interactive, theme-matched Google Map embed.

### Fully Responsive

Ensured seamless layout shifts from a horizontal desktop pinning experience to a native vertical scroll-snap experience on tablets and mobile devices.

## AI Tools Utilized

As requested, AI tools were leveraged to accelerate development and refine the final output:

### Gemini (Google)

Utilized as an architectural assistant to refactor a monolithic file structure into clean, modular React components. It was also heavily used to debug and synchronize complex GSAP `ScrollTrigger` animations across varying viewport sizes and manage React lifecycle hooks such as `useLayoutEffect`.

### AI Image Upscaling / Background Removal

Used to process, upscale, and isolate the client's logo to create a high-resolution, transparent asset that fits perfectly into the new dark theme, as well as converting it into a scalable SVG favicon.

## Running the Project Locally

This project uses **React + Vite** with **HMR** for development.
