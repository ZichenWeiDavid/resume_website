import { useEffect, useState } from "react";
import { useLanguage, useT } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { profile, ui } from "../data/resume";

const SECTIONS = ["about", "education", "experience", "projects", "skills", "contact"];

export default function NavBar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const initials = t(profile.name)
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="nav-brand" href="#top" onClick={() => setMenuOpen(false)}>
        <span className="nav-mark">{initials}</span>
        <span className="nav-name">{t(profile.name)}</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "is-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t(ui.nav[id])}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="pill"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          title="Toggle theme"
        >
          {theme === "dark" ? ui.themeButton.toLight : ui.themeButton.toDark}
        </button>
        <button
          className="pill"
          onClick={toggleLanguage}
          aria-label="Switch language"
          title="Switch language"
        >
          {language === "zh" ? ui.langButton.toEn : ui.langButton.toZh}
        </button>
        <button
          className="pill nav-burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
