import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";

export default function Section({ id, title, kicker, children }) {
  const t = useT();
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-kicker">{kicker}</p>
          <h2 className="section-title">{t(title)}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
