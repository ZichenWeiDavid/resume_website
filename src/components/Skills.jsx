import Section from "./Section";
import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";
import { skills, awards, ui } from "../data/resume";

export default function Skills() {
  const t = useT();
  return (
    <Section id="skills" title={ui.sections.skills} kicker="05 — toolbox">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={i} className="skill-card glass" delay={i * 60}>
            <h3 className="skill-group">
              <span className="skill-emoji" aria-hidden="true">{s.emoji}</span>
              {t(s.group)}
            </h3>
            <div className="chips">
              {s.items.map((item) => (
                <span key={item} className="chip chip-skill">{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="awards glass" delay={120}>
        <h3 className="awards-title">🏅 {t(ui.sections.awards)}</h3>
        <ul className="awards-list">
          {awards.en.map((_, i) => (
            <li key={i}>{t({ en: awards.en[i], zh: awards.zh[i] })}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
