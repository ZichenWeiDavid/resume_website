import { useEffect, useRef, useState } from "react";
import { useLanguage, useT } from "../context/LanguageContext";
import { profile, ui } from "../data/resume";

const GREETINGS = {
  en: ["Hi there", "Hello", "Welcome", "Hey"],
  zh: ["你好呀", "欢迎", "嗨", "见到你真好"],
};

function useTypewriter(text, speed = 55) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export default function Header() {
  const { language } = useLanguage();
  const t = useT();
  const tagline = t(profile.tagline);
  const typed = useTypewriter(tagline, 45);
  const greetings = GREETINGS[language] ?? GREETINGS.en;
  const [gIdx, setGIdx] = useState(0);
  const waveRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setGIdx((i) => (i + 1) % greetings.length), 2600);
    return () => clearInterval(id);
  }, [greetings.length]);

  const wave = () => {
    const el = waveRef.current;
    if (!el) return;
    el.classList.remove("wave-go");
    void el.offsetWidth;
    el.classList.add("wave-go");
  };

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <p className="hero-greeting">
          <span
            ref={waveRef}
            className="wave wave-go"
            role="img"
            aria-label="waving hand"
            onMouseEnter={wave}
            onClick={wave}
          >
            👋
          </span>{" "}
          <span key={gIdx} className="hero-greeting-text">
            {greetings[gIdx]}, {language === "zh" ? "我是" : "I'm"}
          </span>
        </p>

        <h1 className="hero-name">
          <span className="hero-name-gradient">{t(profile.name)}</span>
        </h1>

        <p className="hero-tagline">
          {typed}
          <span className="caret" />
        </p>

        <p className="hero-blurb">{t(profile.blurb)}</p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            {t(ui.hero.cta1)} <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t(ui.hero.cta2)}
          </a>
        </div>

        <div className="hero-socials">
          <a href={`mailto:${profile.email}`} title={profile.email}>✉️ Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <span className="hero-loc">📍 {t(profile.location)}</span>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label={t(ui.hero.scroll)}>
        <span className="hero-scroll-mouse" />
        <span className="hero-scroll-label">{t(ui.hero.scroll)}</span>
      </a>
    </section>
  );
}
