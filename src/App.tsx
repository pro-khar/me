import { ModeToggle } from "./components/mode-toggle";
import Navbar from "./components/Navbar/main";
import About from "./pages/about/about";
import Experience from "./pages/Experience";
import Intro from "./pages/intro/Intro";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="fixed top-2 right-2">
        <ModeToggle />
      </div>
      {/* <UnderCon/> */}
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      {/* <UiTest /> */}
    </div>
  );
}

export default App;
