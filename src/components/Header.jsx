import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="header">
      <h1>魏梓琛</h1>
      <p>
        {language === "zh"
          ? "双硕士 | 信息系统管理 + 工程管理 | 圣路易斯华盛顿大学"
          : "Dual Master's | Information Systems & Engineering Management | Washington University in St. Louis"}
      </p>
    </header>
  );
}
