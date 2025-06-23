import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language } = useLanguage();

  return (
    <section className="section">
      <h2>{language === "zh" ? "技能" : "Skills"}</h2>
      <ul>
        <li>Java, C, C++, Python, Lua</li>
        <li>{language === "zh" ? "SQL, Git, 数据分析, 系统开发, 多模态建模" : "SQL, Git, Data Analysis, System Dev, Multimodal Modeling"}</li>
        <li>{language === "zh" ? "语言：托福108分，普通话母语" : "Languages: TOEFL 108, Native in Mandarin"}</li>
      </ul>
    </section>
  );
}
