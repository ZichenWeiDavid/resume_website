// Single source of truth for all résumé content, in both English and Chinese.
// Edit here to update the site.

export const profile = {
  name: { en: "Zichen Wei", zh: "魏梓琛" },
  tagline: {
    en: "Software Engineer · Data / ML · ERP Cloud",
    zh: "软件工程师 · 数据 / 机器学习 · ERP 云",
  },
  blurb: {
    en: "Dual M.S. candidate at WashU (Information Systems Management + Engineering Management). I build LLM-powered backends at scale, win Kaggle competitions, and scope ERP cloud transformations.",
    zh: "圣路易斯华盛顿大学双硕士在读（信息系统管理 + 工程管理）。做过 LLM 驱动的后端系统、拿过 Kaggle 冠军，也参与 ERP 云转型项目。",
  },
  location: { en: "St. Louis, MO", zh: "美国 圣路易斯" },
  email: "weizichen.david@gmail.com",
  phone: "+1 (470) 232-8606",
  linkedin: "https://www.linkedin.com/in/zichen-wei-34751b340",
  github: "https://github.com/ZichenWeiDavid",
};

export const education = [
  {
    school: {
      en: "Washington University in St. Louis",
      zh: "圣路易斯华盛顿大学",
    },
    place: { en: "St. Louis, MO", zh: "美国 圣路易斯" },
    degree: {
      en: "M.S. Information Systems Management & M.S. Engineering Management",
      zh: "信息系统管理硕士 & 工程管理硕士",
    },
    dates: { en: "Sep 2024 – May 2026", zh: "2024.09 – 2026.05" },
    details: {
      en: [
        "Graduate Certificate: Data Mining & Machine Learning",
        "Coursework: AI, ML, Data Management, Cybersecurity, Project Management",
      ],
      zh: [
        "研究生证书：数据挖掘与机器学习",
        "相关课程：人工智能、机器学习、数据管理、网络安全、项目管理",
      ],
    },
    emoji: "🎓",
  },
  {
    school: {
      en: "University of California, San Diego",
      zh: "加州大学圣地亚哥分校",
    },
    place: { en: "San Diego, CA", zh: "美国 圣地亚哥" },
    degree: {
      en: "B.S. Computer Science–Mathematics",
      zh: "计算机科学–数学 学士",
    },
    dates: { en: "Sep 2020 – Jun 2024", zh: "2020.09 – 2024.06" },
    details: {
      en: [
        "Coursework: Algorithms, Advanced Data Structures, Graph Theory, Discrete Math",
      ],
      zh: ["相关课程：算法、高级数据结构、图论、离散数学"],
    },
    emoji: "🐯",
  },
];

export const experience = [
  {
    company: {
      en: "State Grid Information & Communication Co.",
      zh: "国家电网 信息通信公司",
    },
    role: { en: "Software Engineer Intern", zh: "软件工程师实习生" },
    place: { en: "Beijing, China", zh: "中国 北京" },
    dates: { en: "Jun 2025 – Aug 2025", zh: "2025.06 – 2025.08" },
    bullets: {
      en: [
        "Raised monitoring efficiency by 35% by designing & deploying an LLM-powered log analysis module that flags anomalous admin actions — cut manual review and accelerated audits.",
        "Standardized maintenance workflows with a role-based CRUD staff system using clean DTO/PO layering; enabled reliable bulk data ops via Excel import/export.",
        "Hardened data security by integrating SM4 encryption for sensitive fields to meet internal security requirements and simplify compliance reviews.",
      ],
      zh: [
        "设计并部署 LLM 驱动的日志分析模块，自动标记异常管理员操作，监控效率提升 35%，显著减少人工审查、加速审计。",
        "构建基于角色的人员 CRUD 管理系统，采用清晰的 DTO/PO 分层；通过 Excel 导入导出支持可靠的批量数据操作。",
        "为敏感字段集成 SM4 加密，满足内部安全要求并简化合规审查。",
      ],
    },
    stack: ["Java", "Spring Boot", "MyBatis", "Maven", "LLM", "SM4"],
    emoji: "⚡",
  },
  {
    company: {
      en: "Huawei Technologies — Network Security",
      zh: "华为技术有限公司 — 网络安全",
    },
    role: { en: "Software Engineer", zh: "软件工程师" },
    place: { en: "Beijing, China", zh: "中国 北京" },
    dates: { en: "Jan 2024 – Sep 2024", zh: "2024.01 – 2024.09" },
    bullets: {
      en: [
        "Delivered production DNS fuzzy filtering with the department's lowest bug-report rate; contributed to the team's “Outstanding Development Team” recognition.",
        "Shipped 10+ CLI and northbound config features; modeled complex YANG/YIN schemas to enable robust management-plane automation.",
        "Increased release confidence by automating LLT/HLT test workflows and integrating VM & cloud environments for production validation.",
      ],
      zh: [
        "交付生产环境 DNS 模糊过滤功能，部门内缺陷率最低；助力团队获评“优秀开发团队”。",
        "交付 10+ 项 CLI 与北向配置功能；建模复杂 YANG/YIN 模型，支撑稳健的管理面自动化。",
        "自动化 LLT/HLT 测试流程并接入虚拟机与云环境用于生产验证，提升发布信心、减少回归人力。",
      ],
    },
    stack: ["DNS", "YANG/YIN", "CLI", "Test Automation", "Cloud"],
    emoji: "🛡️",
  },
  {
    company: { en: "ByteDance — E-commerce", zh: "字节跳动 — 电商" },
    role: { en: "Data Analyst Intern", zh: "数据分析实习生" },
    place: { en: "Beijing, China", zh: "中国 北京" },
    dates: { en: "Apr 2023 – Jun 2023", zh: "2023.04 – 2023.06" },
    bullets: {
      en: [
        "Authored a 10-page report on rehabilitation healthcare, synthesizing policy and market signals for commercial decision-making.",
        "Queried 100K+ records in SQL and surfaced 20+ correlations (e.g., age vs. purchase habits) to guide ad audience segmentation.",
      ],
      zh: [
        "撰写 10 页康复医疗行业报告，整合政策与市场信号，支撑商业决策。",
        "用 SQL 查询 10 万+ 条记录，挖掘 20+ 项相关性（如年龄 vs. 消费习惯），指导广告人群分层。",
      ],
    },
    stack: ["SQL", "Analytics", "Market Research"],
    emoji: "📊",
  },
];

export const projects = [
  {
    title: {
      en: "Kaggle Champion — Multimodal Real Estate Valuation",
      zh: "Kaggle 冠军 — 多模态房地产估值",
    },
    dates: { en: "Oct 2024 – Dec 2024", zh: "2024.10 – 2024.12" },
    bullets: {
      en: [
        "Built an end-to-end multimodal pipeline (tabular + text + images); authored the text module (TF-IDF vs. BERT) and supported ResNet-based image features.",
        "Won 1st place by tuning/stacking XGBoost + MLP with Optuna; achieved the lowest RMSE; selected as a teaching case.",
      ],
      zh: [
        "搭建端到端多模态流水线（表格 + 文本 + 图像）；负责文本模块（TF-IDF 对比 BERT），并支持基于 ResNet 的图像特征。",
        "用 Optuna 调参并堆叠 XGBoost + MLP 夺得第一名，取得最低 RMSE，被选为教学案例。",
      ],
    },
    stack: ["Python", "PyTorch", "XGBoost", "Optuna", "BERT"],
    emoji: "🏆",
    link: null,
  },
  {
    title: {
      en: "File Compression Tool — Huffman Coding",
      zh: "文件压缩工具 — 霍夫曼编码",
    },
    dates: { en: "Oct 2022 – Nov 2022", zh: "2022.10 – 2022.11" },
    bullets: {
      en: [
        "Compressed text to 5–20% of original size with lossless restore via on-the-fly Huffman tree reconstruction; top 5% in class.",
      ],
      zh: [
        "通过即时重建霍夫曼树实现无损还原，将文本压缩至原大小的 5–20%；课程排名前 5%。",
      ],
    },
    stack: ["C++"],
    emoji: "🗜️",
    link: null,
  },
  {
    title: {
      en: "PwC — ERP Cloud Transformation",
      zh: "普华永道 — ERP 云转型",
    },
    dates: { en: "Aug 2025 – Dec 2025", zh: "2025.08 – 2025.12" },
    bullets: {
      en: [
        "Scoped Phase-4 testing for Finance/SCM/HCM; prioritized 25–30 critical scenarios + E2E flows (P2P / O2C / H2R) for regression.",
        "Set projected go-live quality gates: UAT ≥ 95%, 0 open P1/P2 defects, 100% source↔target record-count reconciliation.",
        "Modeled automation ROI (Opkey): projected Oracle update regression from 3–5 weeks → 5–7 days (≤60% effort reduction) using 7,000+ pre-built tests.",
      ],
      zh: [
        "为财务/供应链/人力规划第四阶段测试；为回归挑选 25–30 个关键场景及端到端流程（P2P / O2C / H2R）。",
        "设定上线质量门槛（预期）：UAT ≥ 95%、0 个 P1/P2 缺陷、源↔目标记录数 100% 对账。",
        "用 Opkey 建模自动化 ROI：借助 7,000+ 预置测试，将 Oracle 更新回归从 3–5 周缩短至 5–7 天（工作量降低 ≤60%）。",
      ],
    },
    stack: ["Oracle Fusion", "SAP S/4HANA", "Workday", "Opkey"],
    emoji: "☁️",
    link: null,
  },
];

export const skills = [
  {
    group: { en: "Languages", zh: "编程语言" },
    items: ["Java", "Python", "SQL", "C / C++"],
    emoji: "💻",
  },
  {
    group: { en: "Frameworks & Tools", zh: "框架与工具" },
    items: [
      "Spring Boot",
      "Maven",
      "MyBatis",
      "Docker",
      "Git",
      "PyTorch",
      "Scikit-learn",
      "Optuna",
    ],
    emoji: "🧰",
  },
  {
    group: { en: "Cloud", zh: "云" },
    items: ["AWS (EC2, S3)", "GCP (BigQuery, Compute Engine)"],
    emoji: "☁️",
  },
  {
    group: { en: "ERP & Business Apps", zh: "ERP 与业务应用" },
    items: [
      "Oracle Fusion Cloud ERP (Finance/SCM/HCM)",
      "Oracle Integration Cloud (OIC)",
      "Workday (HCM)",
      "SAP S/4HANA",
    ],
    emoji: "🏢",
  },
  {
    group: { en: "Integration & Reporting", zh: "集成与报表" },
    items: [
      "REST / SOAP APIs",
      "FBDI concepts",
      "Data reconciliation & validation",
      "Dashboards & KPI reporting",
    ],
    emoji: "🔗",
  },
  {
    group: { en: "Service Delivery", zh: "交付管理" },
    items: [
      "Jira",
      "Defect triage (P1–P4)",
      "UAT / regression strategy",
      "Audit readiness (SOX / SOC)",
    ],
    emoji: "🧭",
  },
  {
    group: { en: "Data & ML", zh: "数据与机器学习" },
    items: [
      "Multimodal modeling",
      "Gradient boosting & stacking",
      "Hyperparameter tuning (Optuna)",
      "Data analysis",
    ],
    emoji: "🤖",
  },
  {
    group: { en: "Languages (Spoken)", zh: "语言能力" },
    items: ["English (TOEFL 108)", "Mandarin (Native)"],
    emoji: "🗣️",
  },
];

export const awards = {
  en: [
    "🥇 Kaggle Multimodal Real Estate Valuation — 1st Place (2024)",
    "📜 Huawei Certified Software Developer",
    "🌟 Huawei “Outstanding Development Team” recognition",
  ],
  zh: [
    "🥇 Kaggle 多模态房地产估值竞赛 — 第一名（2024）",
    "📜 华为认证软件开发工程师",
    "🌟 华为“优秀开发团队”称号",
  ],
};

export const ui = {
  nav: {
    about: { en: "About", zh: "关于" },
    education: { en: "Education", zh: "教育" },
    experience: { en: "Experience", zh: "经历" },
    projects: { en: "Projects", zh: "项目" },
    skills: { en: "Skills", zh: "技能" },
    contact: { en: "Contact", zh: "联系" },
  },
  sections: {
    about: { en: "About Me", zh: "关于我" },
    education: { en: "Education", zh: "教育背景" },
    experience: { en: "Experience", zh: "工作经历" },
    projects: { en: "Projects", zh: "项目" },
    skills: { en: "Skills & Toolbox", zh: "技能与工具箱" },
    awards: { en: "Awards & Certifications", zh: "奖项与证书" },
    contact: { en: "Get in Touch", zh: "联系我" },
  },
  hero: {
    cta1: { en: "See my work", zh: "查看作品" },
    cta2: { en: "Get in touch", zh: "联系我" },
    scroll: { en: "scroll", zh: "向下滚动" },
  },
  contact: {
    email: { en: "Email", zh: "邮箱" },
    phone: { en: "Phone", zh: "电话" },
    location: { en: "Location", zh: "所在地" },
    lead: {
      en: "Open to software, data/ML, and ERP roles. The fastest way to reach me is email.",
      zh: "目前开放软件、数据/机器学习与 ERP 相关机会，最快的联系方式是邮件。",
    },
  },
  footer: {
    en: "Built with React + Vite. Hand-coded, no templates. © ",
    zh: "用 React + Vite 手写，无模板。© ",
  },
  langButton: { toEn: "EN", toZh: "中文" },
  themeButton: { toDark: "🌙", toLight: "☀️" },
};
