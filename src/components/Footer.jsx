import { useT } from "../context/LanguageContext";
import { profile, ui } from "../data/resume";

export default function Footer() {
  const t = useT();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          {t(ui.footer)}
          {new Date().getFullYear()} {t(profile.name)}
        </p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#top">↑ Top</a>
        </div>
      </div>
    </footer>
  );
}
