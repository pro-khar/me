import { ModeToggle } from "./components/mode-toggle";
import Navbar from "./components/Navbar/main";
import About from "./pages/about/about";
import Intro from "./pages/intro/Intro";
import UiTest from "./ui-test";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="fixed top-2 right-2">
        <ModeToggle />
      </div>
      <Navbar/>
      <Intro />
      <About/>
      <UiTest />
    </div>
  );
}

export default App;
