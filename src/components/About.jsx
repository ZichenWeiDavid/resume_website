import Section from "./Section";
import Reveal from "./Reveal";
import { useT } from "../context/LanguageContext";
import { profile, ui } from "../data/resume";

const FACTS = [
  { value: "3", label: { en: "internships & roles", zh: "实习与工作" }, emoji: "💼" },
  { value: "1st", label: { en: "Kaggle finish", zh: "Kaggle 名次" }, emoji: "🏆" },
  { value: "2", label: { en: "M.S. degrees (in progress)", zh: "硕士学位（在读）" }, emoji: "🎓" },
  { value: "+35%", label: { en: "monitoring efficiency", zh: "监控效率提升" }, emoji: "⚡" },
];

const HIGHLIGHTS = {
  en: [
    "LLM-powered log analysis & anomaly detection in production (Java / Spring Boot).",
    "Kaggle champion — multimodal pipeline (tabular + text + images), lowest RMSE.",
    "Network-security engineering at Huawei: DNS filtering, YANG/YIN modeling, test automation.",
    "ERP cloud transformation at PwC: testing strategy, go-live quality gates, automation ROI.",
  ],
  zh: [
    "在生产环境中实现 LLM 驱动的日志分析与异常检测（Java / Spring Boot）。",
    "Kaggle 冠军 —— 多模态流水线（表格 + 文本 + 图像），取得最低 RMSE。",
    "在华为做网络安全工程：DNS 过滤、YANG/YIN 建模、测试自动化。",
    "在普华永道参与 ERP 云转型：测试策略、上线质量门槛、自动化 ROI 建模。",
  ],
};

export default function About() {
  const t = useT();
  return (
    <Section id="about" title={ui.sections.about} kicker="01 — whoami">
      <div className="about-grid">
        <Reveal className="about-card glass" delay={60}>
          <p className="about-lead">{t(profile.blurb)}</p>
          <ul className="about-highlights">
            {HIGHLIGHTS.en.map((_, i) => (
              <li key={i}>
                <span className="bullet-dot" />
                {t({ en: HIGHLIGHTS.en[i], zh: HIGHLIGHTS.zh[i] })}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="about-facts">
          {FACTS.map((f, i) => (
            <Reveal key={i} className="fact-card glass" delay={120 + i * 80}>
              <span className="fact-emoji" aria-hidden="true">{f.emoji}</span>
              <span className="fact-value">{f.value}</span>
              <span className="fact-label">{t(f.label)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
