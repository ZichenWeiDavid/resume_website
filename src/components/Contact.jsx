import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section className="section">
      <h2>{language === "zh" ? "联系我" : "Contact"}</h2>
      <p>📧 {language === "zh" ? "邮箱" : "Email"}：2563232169@qq.com</p>
      <p>📍 {language === "zh" ? "所在地" : "Location"}：北京</p>
      <p>📱 {language === "zh" ? "电话" : "Phone"}：15311581013</p>
    </section>
  );
}
