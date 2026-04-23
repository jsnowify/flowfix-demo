import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siteUrl,
  siteTitle,
  siteDescription,
  siteImage,
  services,
} from "./data";

// Components
import CustomCursor from "./components/CustomCursor";
import PipeScrollbar from "./components/PipeScrollbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Reviews from "./components/Reviews";
import MapLocation from "./components/MapLocation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function setMeta(name, content, attr = "name") {
  let element = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function FlowFix() {
  const rootRef = useRef(null);
  const navRef = useRef(null);
  const progressFillRef = useRef(null);
  const progressDropRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const servicesRailRef = useRef(null);
  const servicesTrackRef = useRef(null);
  const activeServiceRef = useRef(0);
  const introTlRef = useRef(null);
  const scrollStateRef = useRef({
    enabled: false,
    target: 0,
    current: 0,
    raf: 0,
  });

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Plumber",
      name: "FlowFix Plumbing",
      image: siteImage,
      url: siteUrl,
      telephone: "+1-512-555-0199",
      email: "info@flowfixplumbing.com",
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "742 Pipe Lane",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78701",
        addressCountry: "US",
      },
      areaServed: "Austin, Texas",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "19:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2400",
      },
    }),
    [],
  );

  useEffect(() => {
    document.title = siteTitle;
    setMeta("description", siteDescription);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("theme-color", "#111111");
    setMeta("og:type", "website", "property");
    setMeta("og:title", siteTitle, "property");
    setMeta("og:description", siteDescription, "property");
    setMeta("og:url", siteUrl, "property");
    setMeta("og:image", siteImage, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", siteTitle);
    setMeta("twitter:description", siteDescription);
    setMeta("twitter:image", siteImage);
    setLink("canonical", siteUrl);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.setAttribute("data-seo", "flowfix-schema");
    document.head.appendChild(script);

    return () => script.remove();
  }, [structuredData]);

  useEffect(() => {
    const minVisibleMs = 320;
    const startTime = performance.now();
    const preloader = document.querySelector(".preloader");
    const preloaderMark = document.querySelector(".preloader__mark");

    const finish = () => {
      const elapsed = performance.now() - startTime;
      const delay = Math.max(0, minVisibleMs - elapsed);

      window.setTimeout(() => {
        if (!preloader || !preloaderMark) {
          setIsLoading(false);
          document.body.classList.remove("is-loading");
          return;
        }

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            onComplete: () => {
              setIsLoading(false);
              document.body.classList.remove("is-loading");
              preloader.remove();
            },
          });

          tl.to(preloaderMark, {
            y: -8,
            opacity: 0,
            duration: 0.24,
            ease: "power2.out",
          }).to(
            preloader,
            {
              autoAlpha: 0,
              yPercent: -100,
              duration: 0.72,
              ease: "power3.inOut",
            },
            "-=0.02",
          );
        });

        return () => ctx.revert();
      }, delay);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      document.body.classList.remove("is-loading");
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarsePointer) return undefined;

    document.body.classList.add("has-custom-cursor");

    const moveDotX = gsap.quickTo(cursorDotRef.current, "x", {
      duration: 0.14,
      ease: "power2.out",
    });
    const moveDotY = gsap.quickTo(cursorDotRef.current, "y", {
      duration: 0.14,
      ease: "power2.out",
    });
    const moveRingX = gsap.quickTo(cursorRingRef.current, "x", {
      duration: 0.28,
      ease: "power3.out",
    });
    const moveRingY = gsap.quickTo(cursorRingRef.current, "y", {
      duration: 0.28,
      ease: "power3.out",
    });

    const onPointerMove = (event) => {
      moveDotX(event.clientX);
      moveDotY(event.clientY);
      moveRingX(event.clientX);
      moveRingY(event.clientY);
      const interactive = event.target.closest(
        "a, button, input, textarea, .service-card, .services-pill, .contact-quick-actions a",
      );
      document.body.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const onLeave = () => document.body.classList.remove("cursor-hover");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor", "cursor-hover");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const desktopLike = window.innerWidth > 1180;
    const state = scrollStateRef.current;
    state.enabled = !reduceMotion && !coarsePointer && desktopLike;
    state.target = window.scrollY;
    state.current = window.scrollY;

    const updatePipe = (scrollY = window.scrollY) => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = scrollY / maxScroll;
      if (progressFillRef.current)
        progressFillRef.current.style.transform = `scaleY(${progress})`;
      if (progressDropRef.current)
        progressDropRef.current.style.transform = `translateX(-50%) translateY(${progress * Math.max(Math.min(window.innerHeight * 0.58, 420) - 24, 80)}px)`;
    };

    const tick = () => {
      const diff = state.target - state.current;
      state.current += diff * 0.1;
      if (Math.abs(diff) < 0.35) state.current = state.target;
      window.scrollTo(0, state.current);
      updatePipe(state.current);
      ScrollTrigger.update();
      if (Math.abs(state.target - state.current) > 0.35)
        state.raf = window.requestAnimationFrame(tick);
      else state.raf = 0;
    };

    const onWheel = (event) => {
      if (
        !state.enabled ||
        event.ctrlKey ||
        event.target.closest("input, textarea, select, [data-native-scroll]")
      )
        return;
      event.preventDefault();
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      state.target = gsap.utils.clamp(
        0,
        maxScroll,
        state.target + event.deltaY,
      );
      if (!state.raf) state.raf = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (state.raf) return;
      state.target = window.scrollY;
      state.current = window.scrollY;
      updatePipe(window.scrollY);
    };

    const onResize = () => {
      state.enabled =
        !reduceMotion && !coarsePointer && window.innerWidth > 1180;
      state.target = window.scrollY;
      state.current = window.scrollY;
      updatePipe(window.scrollY);
      ScrollTrigger.refresh(true);
    };

    updatePipe(window.scrollY);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (state.raf) {
        window.cancelAnimationFrame(state.raf);
        state.raf = 0;
      }
    };
  }, []);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".nav-reveal",
          ".hero-kicker",
          ".hero-copy",
          ".hero-trust-row",
          ".hero-actions > *",
          ".hero-stats > *",
          ".hero-image-wrap",
          ".hero-panel",
        ],
        { autoAlpha: 0 },
      );
      gsap.set(".hero-title .line", { yPercent: 108, autoAlpha: 0 });
      gsap.set(
        [
          ".nav-reveal",
          ".hero-kicker",
          ".hero-copy",
          ".hero-trust-row",
          ".hero-actions > *",
        ],
        { y: 16 },
      );
      gsap.set(".hero-stats > *", { y: 20 });
      gsap.set([".hero-image-wrap", ".hero-panel"], { y: 24 });

      introTlRef.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      introTlRef.current
        .to(".nav-reveal", {
          y: 0,
          autoAlpha: 1,
          duration: 0.58,
          stagger: 0.05,
        })
        .to(".hero-kicker", { y: 0, autoAlpha: 1, duration: 0.42 }, "-=0.24")
        .to(
          ".hero-title .line",
          { yPercent: 0, autoAlpha: 1, duration: 0.85, stagger: 0.1 },
          "-=0.12",
        )
        .to(
          ".hero-copy, .hero-trust-row",
          { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.06 },
          "-=0.4",
        )
        .to(
          ".hero-actions > *",
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          "-=0.35",
        )
        .to(
          ".hero-stats > *",
          { y: 0, autoAlpha: 1, duration: 0.48, stagger: 0.07 },
          "-=0.28",
        )
        .to(
          ".hero-image-wrap, .hero-panel",
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
          "-=0.42",
        );

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (navRef.current)
            navRef.current.classList.toggle("is-scrolled", self.scroll() > 24);
        },
      });

      if (!reduceMotion) {
        gsap.to(".hero-image-wrap", {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-orb", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      gsap.utils
        .toArray(
          ".section-head, .about-copy-column, .about-media, .review-card, .map-container, .contact-card",
        )
        .forEach((element) => {
          gsap.fromTo(
            element,
            { y: 42, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            },
          );
        });

      mm.add("(min-width: 1181px)", () => {
        const rail = servicesRailRef.current;
        const track = servicesTrackRef.current;
        if (!rail || !track) return undefined;
        const getDistance = () =>
          Math.max(track.scrollWidth - rail.clientWidth, 0);
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          paused: true,
        });

        const pin = ScrollTrigger.create({
          animation: tween,
          trigger: rail,
          start: "top top+=110",
          end: () => `+=${getDistance() + window.innerHeight * 0.4}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextIndex = Math.min(
              services.length - 1,
              Math.max(0, Math.round(self.progress * (services.length - 1))),
            );
            if (nextIndex !== activeServiceRef.current) {
              activeServiceRef.current = nextIndex;
              setActiveService(nextIndex);
            }
          },
        });

        gsap.fromTo(
          ".service-card",
          { opacity: 0.45, y: 18, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: { trigger: rail, start: "top 80%", once: true },
          },
        );
        return () => {
          pin.kill();
          tween.kill();
        };
      });

      mm.add("(max-width: 1180px)", () => {
        gsap.utils.toArray(".service-card").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 34, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 90%", once: true },
            },
          );
        });
      });

      gsap.utils.toArray("main section[id]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveSection(section.id);
          },
        });
      });
    }, rootRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!isLoading && introTlRef.current) introTlRef.current.play();
  }, [isLoading]);

  useEffect(() => {
    activeServiceRef.current = activeService;
  }, [activeService]);

  function animateToScroll(targetY) {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const nextY = gsap.utils.clamp(0, maxScroll, targetY);
    const state = scrollStateRef.current;

    if (state.enabled) {
      state.target = nextY;
      if (!state.raf) {
        const update = () => {
          const diff = state.target - state.current;
          state.current += diff * 0.1;
          if (Math.abs(diff) < 0.35) state.current = state.target;
          window.scrollTo(0, state.current);
          ScrollTrigger.update();
          if (Math.abs(state.target - state.current) > 0.35)
            state.raf = window.requestAnimationFrame(update);
          else state.raf = 0;
        };
        state.raf = window.requestAnimationFrame(update);
      }
    } else window.scrollTo({ top: nextY, behavior: "smooth" });
  }

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;
    const navOffset = window.innerWidth <= 720 ? 92 : 108;
    const targetY =
      section.getBoundingClientRect().top + window.scrollY - navOffset;
    animateToScroll(targetY);
    setMenuOpen(false);
  }

  function handleNavClick(event, id) {
    event.preventDefault();
    scrollToSection(id);
  }

  function handleInputChange(event) {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `FlowFix service inquiry from ${formData.name || "Website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:info@flowfixplumbing.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="site-shell" ref={rootRef}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <CustomCursor dotRef={cursorDotRef} ringRef={cursorRingRef} />
      <PipeScrollbar fillRef={progressFillRef} dropRef={progressDropRef} />

      <Navbar
        navRef={navRef}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <main id="main-content">
        <Hero handleNavClick={handleNavClick} />
        <Services
          railRef={servicesRailRef}
          trackRef={servicesTrackRef}
          activeService={activeService}
          setActiveService={setActiveService}
          handleNavClick={handleNavClick}
        />
        <About />
        <Reviews />
        <MapLocation />
        <Contact
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleNavClick={handleNavClick}
        />
      </main>

      <Footer />
    </div>
  );
}
