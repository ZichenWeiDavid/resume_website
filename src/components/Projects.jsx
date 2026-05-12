import Section from "./Section";
import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";
import { projects, ui } from "../data/resume";

export default function Projects() {
  const t = useT();
  return (
    <Section id="projects" title={ui.sections.projects} kicker="04 — things I built">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={i} className="project-card glass tilt" delay={i * 90}>
            <div className="project-top">
              <span className="project-emoji" aria-hidden="true">{p.emoji}</span>
              <span className="project-dates">{t(p.dates)}</span>
            </div>
            <h3 className="project-title">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer">{t(p.title)} ↗</a>
              ) : (
                t(p.title)
              )}
            </h3>
            <ul className="project-bullets">
              {p.bullets.en.map((_, j) => (
                <li key={j}>
                  <span className="bullet-dot" />
                  {t({ en: p.bullets.en[j], zh: p.bullets.zh[j] })}
                </li>
              ))}
            </ul>
            <div className="chips">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
