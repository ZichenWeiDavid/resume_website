import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section className="section">
      <h2>{language === "zh" ? "工作经历" : "Experience"}</h2>
      <ul>
        <li>
          <strong>华为技术有限公司</strong> - {language === "zh" ? "软件开发工程师" : "Software Engineer"}（2024.01 - 2024.09, 北京）<br />
          {language === "zh"
            ? "负责DNS模糊过滤功能主流程、北向接口、LLT/HLT自动测试、分支合并，产出代码20000+行"
            : "Led the DNS fuzzy filtering pipeline, Northbound APIs, LLT/HLT automation, branch merges; delivered over 20,000 lines of production code."}
        </li>
        <li>
          <strong>北京字节跳动科技有限公司</strong> - {language === "zh" ? "电商数据分析实习生" : "E-commerce Data Analyst Intern"}（2023.04 - 2023.06）<br />
          {language === "zh"
            ? "负责康复医疗行业调研与10万+电商数据清洗与变量分析，输出策略报告"
            : "Conducted industry research and cleaned 100k+ e-commerce records for analysis; delivered strategic reports on rehabilitation product lines."}
        </li>
      </ul>
    </section>
  );
}
