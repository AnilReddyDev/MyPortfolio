import Header from "./components/Header";
import HighlightEffect from "./utils/HighlightEffect";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="w-auto h-auto poppins-regular flex flex-col lg:flex-row lg:justify-center items-center lg:items-start  bg-[#0E1733]">
      <HighlightEffect />
      <Header />
      <div className="lg:w-5/12  lg:pt-28 w-11/12 h-90 pl-2 lg:pl-0 lg:h-auto  text-white">
        <About />
        <Experience/>
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
