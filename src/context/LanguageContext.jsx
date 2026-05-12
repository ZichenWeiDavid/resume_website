import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("lang");
  if (saved === "en" || saved === "zh") return saved;
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("lang", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Convenience: pick the right string from a { en, zh } object.
export const useT = () => {
  const { language } = useLanguage();
  return (entry) => {
    if (entry == null) return "";
    if (typeof entry === "string") return entry;
    return entry[language] ?? entry.en ?? "";
  };
};
