import { useState, useEffect } from "react";

const Header = () => {
  const navItems = [
    { name: "HOME", id: "hero" },
    { name: "OUR STORY", id: "our-story" },
    { name: "DETAILS", id: "details" },
    { name: "INFO", id: "guest-info" },
    { name: "REGISTRY", id: "registry" },
    { name: "FAQ", id: "faq" },
    { name: "RSVP", id: "rsvp" },
  ];

  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Prevent background scrolling when full-screen menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-[#FCFBF7] border-b border-stone-100 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 select-none">
      {/* Initials / Logo */}
      <div className="text-xl font-serif tracking-widest text-stone-800 font-medium z-50">
        K & F
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex gap-8 text-xs font-sans tracking-widest text-stone-500 font-medium">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={index}
              href={`#${item.id}`}
              className={`hover:text-stone-900 transition-colors duration-300 relative py-1 ${
                isActive
                  ? "text-stone-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C5A880]"
                  : ""
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Button / Hamburger Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5 z-50 relative focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-stone-800 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-stone-800 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-stone-800 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Full-Screen Overlay Navigation */}
      <div
        className={`fixed inset-0 bg-[#FCFBF7] z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-sm font-sans tracking-[0.25em] text-stone-500 font-medium">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-1 relative ${
                  isActive ? "text-stone-900 font-semibold" : ""
                } ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#C5A880]" />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Decorative subtitle centered at the absolute top on desktop */}
      <div className="hidden md:block absolute top-1 left-1/2 transform -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-stone-400 pointer-events-none">
        Together with their families
      </div>
    </header>
  );
};

export default Header;
