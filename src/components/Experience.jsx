import Section from "./Section";
import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";
import { experience, ui } from "../data/resume";

export default function Experience() {
  const t = useT();
  return (
    <Section id="experience" title={ui.sections.experience} kicker="03 — track record">
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={i} className="timeline-item" delay={i * 90}>
            <span className="timeline-node" aria-hidden="true">{job.emoji}</span>
            <div className="timeline-card glass tilt">
              <div className="timeline-card-head">
                <h3 className="timeline-company">{t(job.company)}</h3>
                <span className="timeline-dates">{t(job.dates)}</span>
              </div>
              <p className="timeline-role">
                {t(job.role)} <span className="dot-sep">·</span> {t(job.place)}
              </p>
              <ul className="timeline-bullets">
                {job.bullets.en.map((_, j) => (
                  <li key={j}>
                    <span className="bullet-dot" />
                    {t({ en: job.bullets.en[j], zh: job.bullets.zh[j] })}
                  </li>
                ))}
              </ul>
              <div className="chips">
                {job.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
