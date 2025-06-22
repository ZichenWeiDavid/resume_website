import './style.css'; // 你新建的全局样式文件
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
