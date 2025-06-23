import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section className="section">
      <h2>{language === "zh" ? "关于我" : "About Me"}</h2>
      <p>
        {language === "zh"
          ? "我目前是圣路易斯华盛顿大学双硕士在读，专业为信息系统管理与工程管理，曾在华为担任软件工程师，在字节跳动实习，拥有丰富的数据分析与系统开发经验。熟悉多种编程语言，参与多个高强度项目。"
          : "I am currently pursuing dual Master’s degrees at Washington University in St. Louis in Information Systems Management and Engineering Management. I previously worked at Huawei as a Software Engineer and interned at ByteDance, with strong experience in data analytics and system development."}
      </p>
    </section>
  );
}
