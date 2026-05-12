import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";
import { profile, ui } from "../data/resume";

function CopyRow({ icon, label, value, href }) {
  const [copied, setCopied] = useState(false);
  const copy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = href;
    }
  };
  return (
    <div className="contact-row">
      <span className="contact-icon" aria-hidden="true">{icon}</span>
      <div className="contact-row-text">
        <span className="contact-label">{label}</span>
        <a href={href} className="contact-value" target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {value}
        </a>
      </div>
      <button className="pill contact-copy" onClick={copy} title="Copy">
        {copied ? "✓" : "⧉"}
      </button>
    </div>
  );
}

export default function Contact() {
  const t = useT();
  return (
    <Section id="contact" title={ui.sections.contact} kicker="06 — say hi">
      <Reveal className="contact-card glass" delay={60}>
        <p className="contact-lead">{t(ui.contact.lead)}</p>
        <div className="contact-rows">
          <CopyRow icon="✉️" label={t(ui.contact.email)} value={profile.email} href={`mailto:${profile.email}`} />
          <CopyRow icon="📱" label={t(ui.contact.phone)} value={profile.phone} href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} />
          <CopyRow icon="💼" label="LinkedIn" value="zichen-wei" href={profile.linkedin} />
          <CopyRow icon="🐙" label="GitHub" value="ZichenWeiDavid" href={profile.github} />
        </div>
        <p className="contact-loc">📍 {t(profile.location)}</p>
        <a className="btn btn-primary contact-btn" href={`mailto:${profile.email}`}>
          {t(ui.hero.cta2)} ✨
        </a>
      </Reveal>
    </Section>
  );
}
