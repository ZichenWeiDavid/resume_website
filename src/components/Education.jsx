import Section from "./Section";
import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";
import { education, ui } from "../data/resume";

export default function Education() {
  const t = useT();
  return (
    <Section id="education" title={ui.sections.education} kicker="02 — credentials">
      <div className="edu-grid">
        {education.map((e, i) => (
          <Reveal key={i} className="edu-card glass tilt" delay={60 + i * 100}>
            <div className="edu-head">
              <span className="edu-emoji" aria-hidden="true">{e.emoji}</span>
              <div>
                <h3 className="edu-school">{t(e.school)}</h3>
                <p className="edu-meta">
                  {t(e.place)} · {t(e.dates)}
                </p>
              </div>
            </div>
            <p className="edu-degree">{t(e.degree)}</p>
            <ul className="edu-details">
              {e.details.en.map((_, j) => (
                <li key={j}>
                  <span className="bullet-dot" />
                  {t({ en: e.details.en[j], zh: e.details.zh[j] })}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
