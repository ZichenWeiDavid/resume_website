import './style.css'; // 你新建的全局样式文件
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useLanguage } from './context/LanguageContext';



function App() {
  const { language, toggleLanguage } = useLanguage();
  return (

    <div>
    <div style={{ textAlign: 'right', padding: '10px 20px' }}>
      <button onClick={toggleLanguage}>
        {language === 'zh' ? 'English' : '中文'}
      </button>
      </div>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
